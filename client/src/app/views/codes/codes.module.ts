import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodesRoutingModule } from './codes-routing.module';
import { CoursesCodesComponent } from './courses-codes/courses-codes.component';
import { ActivationCodesComponent } from './activation-codes/activation-codes.component';
import { AddCodeComponent } from './add-code/add-code.component';


@NgModule({
  declarations: [CoursesCodesComponent, ActivationCodesComponent, AddCodeComponent],
  imports: [
    CommonModule,
    CodesRoutingModule
  ]
})
export class CodesModule { }
