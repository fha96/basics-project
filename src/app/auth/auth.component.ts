import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/palceholder/placeholder.directive';

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy{
  isLoginMode: boolean = true;
  @ViewChild('authForm') authForm: NgForm;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceHolderDirective) alertPlaceHolder: PlaceHolderDirective ;

  private closeSub: Subscription ;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
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
        console.log('SignIn Accepted' +response);
        this.router.navigate(['/recipes']);
        this.error = null;
      },
      (errorMessage) => {
        this.isLoading = false;
        this.onCreateAlert(errorMessage);
        // this.error = errorMessage;
      }
    );
    this.authForm.reset();
  }

  onCreateAlert(message: string) {
    const alrtCmp = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainer = this.alertPlaceHolder.viewContainerRef ;
    hostViewContainer.clear();
    const componentRef = hostViewContainer.createComponent(alrtCmp); 
    componentRef.instance.message = message ;
    this.closeSub = componentRef.instance.close.subscribe(
      () => {
        this.closeSub.unsubscribe();
        hostViewContainer.clear();
      }
    )
  }

  ngOnDestroy(): void {
    if(this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
