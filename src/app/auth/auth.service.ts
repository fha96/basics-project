import { Injectable } from '@angular/core';
import { UserCredintial } from './userCredintial.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

// best practice to define the type of data you're working with
export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any ;
  constructor(private http: HttpClient, private router: Router) {}

  signUp(userCredintials: UserCredintial) {
    // below we define the type of data that I will get form this request
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlZDp0oj56gei0XZKWREH76jXTqLmuWig',
        { ...userCredintials, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthentication(response);
        })
      );
  }

  signIn(userCredintials: UserCredintial) {
    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlZDp0oj56gei0XZKWREH76jXTqLmuWig',
        { ...userCredintials, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((response) => {
          this.handleAuthentication(response);
        })
      );
  }
  autoSignOut(expiryDuration: number) {
    console.log(expiryDuration);
   this.tokenExpirationTimer= setTimeout(() => {
      this.signOut();
    }, expiryDuration);
  }

  signOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null ;
  }

  autoSignIn() {
    const loacalUserData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!loacalUserData) {
      return;
    }

    const loadedUser = new User(
      loacalUserData.email,
      loacalUserData.id,
      loacalUserData._token,
      new Date(loacalUserData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(loacalUserData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoSignOut(expirationDuration)
    }
  }

  private handleAuthentication(response: AuthResponse) {
    const expiryDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expiryDate
    );
    this.user.next(user);
    this.autoSignOut(+expiryDate *1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMsg = 'Unknow error occurred!';
    console.log(errorResponse);

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => errorMsg);
    }
    console.log(errorResponse.error.error.message);

    switch (errorResponse.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'Email not found!';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Email or Password is not correct!';
        break;
      case 'USER_DISABLED':
        errorMsg = 'Your account has been blocked!';
        break;
      case 'EMAIL_EXISTS':
        errorMsg = 'Email already exist';
        break;
      default:
        errorMsg = errorMsg;
    }
    return throwError(() => errorMsg);
  }
}
