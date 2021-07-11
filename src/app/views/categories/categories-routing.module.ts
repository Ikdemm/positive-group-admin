import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Catégories'
        },
        children: [
            {
                path: 'list',
                component: CategoriesListComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'new',
                component: AddCategoryComponent,
                data: {
                    title: 'Nouvelle Catégorie'
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
