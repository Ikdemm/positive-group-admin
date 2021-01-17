import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories: Array<Category> ;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    console.log("yo")
    this.categoriesService.getCategories().subscribe((data: Array<Category>) => {
      this. categories = data
    })
  }

}
