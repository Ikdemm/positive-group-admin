import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private categories: CategoriesService) { }

  ngOnInit(): void {
    console.log("yo")
    this.categories.getCategories().subscribe((data: Array<Category>) => {
      console.log(data)
    })
  }

}
