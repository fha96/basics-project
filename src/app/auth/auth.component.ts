import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  @ViewChild('authForm') authForm: NgForm;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService,
                private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.error = null;
      return;
    }
    const userCredintials = this.authForm.value;
    /* We declared below observable to reduce the redundencay of the code,
     by initialize this observable to the observables that comes from auth service */
    let authObservable: Observable<AuthResponse>;
    this.isLoading = true;
    if (!this.isLoginMode) {
      authObservable = this.authService.signUp(userCredintials);
    } else {
      authObservable = this.authService.signIn(userCredintials);
    }

    authObservable.subscribe(
      (response) => {
        this.isLoading = false;
        console.log(response);
        this.router.navigate(['/recipes'], )
        this.error = null;
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );
    this.authForm.reset();
  }
}
