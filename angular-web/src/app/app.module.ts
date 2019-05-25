import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { ErrorComponent } from './error/error.component';
import { DogDirective } from './directives/dog.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DogManagementComponent } from './dog-management/dog-management.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatRadioModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatDividerModule, MatListModule } from '@angular/material';

import { MatInputModule, MatOptionModule, MatIconModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material'

import { NgxBarcodeModule } from 'ngx-barcode';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent,
    ErrorComponent,
    DogDirective,
    DogManagementComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,

    MatRadioModule,
    MatSelectModule,
    MatInputModule, MatOptionModule, MatIconModule,
    MatDividerModule, MatListModule,
    NgxBarcodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
