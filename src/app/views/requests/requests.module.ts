import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { CoursesRequestsComponent } from './courses-requests/courses-requests.component';
import { ActivationRequestsComponent } from './activation-requests/activation-requests.component';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [CoursesRequestsComponent, ActivationRequestsComponent],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    AlertModule
  ]
})
export class RequestsModule { }
