import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivationRequestsComponent } from './activation-requests/activation-requests.component';
import { CoursesRequestsComponent } from './courses-requests/courses-requests.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Requêtes'
    },
    children: [
      {
        path: 'activation-requests',
        component: ActivationRequestsComponent,
        data: {
          title: "Requêtes d'activation de comptes"
        }
      },
      {
        path: 'courses-requests',
        component: CoursesRequestsComponent,
        data: {
          title: "Requêtes d'achat de cours"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
