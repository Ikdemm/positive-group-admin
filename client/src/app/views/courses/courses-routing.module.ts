import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Cours'
        },
        children: [
            {
                path: 'list',
                component: CoursesListComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'new',
                component: AddCourseComponent,
                data: {
                    title: 'Nouveau cours'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
