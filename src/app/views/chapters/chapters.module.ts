import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { ChaptersListComponent } from './chapters-list/chapters-list.component';
import { AddChapterComponent } from './add-chapter/add-chapter.component';
import { EditChapterComponent } from './edit-chapter/edit-chapter.component';

import { ChaptersRoutingModule } from './chapters-routing.module';


@NgModule({
  declarations: [ChaptersListComponent, AddChapterComponent, EditChapterComponent],
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [EditChapterComponent]
})
export class ChaptersModule { }
