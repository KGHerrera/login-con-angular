import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({apiKey: "AIzaSyBU231S6wTI8M_AUAcyU9VOEtAhEK7DqEE",
    authDomain: "login-a92dc.firebaseapp.com",
    projectId: "login-a92dc",
    storageBucket: "login-a92dc.appspot.com",
    messagingSenderId: "31237419112",
    appId: "1:31237419112:web:f8668be29ce2d4a0434bdd"})),
    provideAuth(() => getAuth()),

    // error solution NullInjectError
    AngularFireModule.initializeApp({apiKey: "AIzaSyBU231S6wTI8M_AUAcyU9VOEtAhEK7DqEE",
    authDomain: "login-a92dc.firebaseapp.com",
    projectId: "login-a92dc",
    storageBucket: "login-a92dc.appspot.com",
    messagingSenderId: "31237419112",
    appId: "1:31237419112:web:f8668be29ce2d4a0434bdd"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
