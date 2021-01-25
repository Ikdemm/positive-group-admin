import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';



@NgModule({
  declarations: [ChaptersListComponent, AddChapterComponent],
  imports: [
    CommonModule
  ]
})
export class ChaptersModule { }
