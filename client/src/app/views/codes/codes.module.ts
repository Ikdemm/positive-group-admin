import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodesRoutingModule } from './codes-routing.module';
import { CoursesCodesComponent } from './courses-codes/courses-codes.component';
import { ActivationCodesComponent } from './activation-codes/activation-codes.component';
import { AddCodeComponent } from './add-code/add-code.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreditCodesComponent } from './credit-codes/credit-codes.component';


@NgModule({
  declarations: [CoursesCodesComponent, ActivationCodesComponent, AddCodeComponent, CreditCodesComponent],
  imports: [
    CommonModule,
    CodesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CodesModule { }
