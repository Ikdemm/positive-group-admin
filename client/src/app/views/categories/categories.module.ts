import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';

// Components Routing
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
