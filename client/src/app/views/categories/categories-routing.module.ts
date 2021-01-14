import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Catégories'
        },
        children: [
            {
                path: '',
                redirectTo: 'categories'
            },
            {
                path: 'new',
                component: AddCategoryComponent,
                data: {
                    title: 'new'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule { }
