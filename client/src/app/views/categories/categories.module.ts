import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  declarations: [AddCategoryComponent, CategoriesListComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [EditCategoryComponent]
})
export class CategoriesModule { }
