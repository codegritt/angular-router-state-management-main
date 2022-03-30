import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor, fakeBackendProvider } from '../app/_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';

@NgModule({
  declarations: [AppComponent,  AlertComponent,HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent],
})
export class AppModule {}
