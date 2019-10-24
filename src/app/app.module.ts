import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { LoginComponent } from './login/login.component';
import { RestrictedModule } from './restricted/restricted.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorModule } from './auth/interceptor.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    InterceptorModule,
    RestrictedModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
