import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivationCodesComponent } from './activation-codes/activation-codes.component';
import { AddCodeComponent } from './add-code/add-code.component';
import { CoursesCodesComponent } from './courses-codes/courses-codes.component';
import { CreditCodesComponent } from './credit-codes/credit-codes.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Codes'
        },
        children: [
            {
                path: 'courses-codes',
                component: CoursesCodesComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'activation-codes',
                component: ActivationCodesComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'add-code',
                component: AddCodeComponent,
                data: {
                    title: 'Nouveau code'
                }
            },
            {
                path: 'credit-codes',
                component: CreditCodesComponent,
                data: {
                    title: 'Code de crédit'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CodesRoutingModule { }
