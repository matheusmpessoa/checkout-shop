import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    HomeComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
