import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestingComponent } from './Test1/testing/testing.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, HelloComponent, TestingComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
