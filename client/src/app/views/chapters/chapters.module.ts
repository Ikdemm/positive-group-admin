import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';

import { ChaptersRoutingModule } from './chapters-routing.module';



@NgModule({
  declarations: [ChaptersListComponent, AddChapterComponent],
  imports: [
    CommonModule,
    ChaptersRoutingModule
  ]
})
export class ChaptersModule { }
