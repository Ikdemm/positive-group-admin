import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Chapitres'
        },
        children: [
            {
                path: 'list',
                component: ChaptersListComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'new',
                component: AddChapterComponent,
                data: {
                    title: 'Nouveau Chapitre'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChaptersRoutingModule { }
