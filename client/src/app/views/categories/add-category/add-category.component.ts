import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })

  constructor(private categoriesService: CategoriesService) { }

  onSubmit() {
    console.log(this.categoryForm.value)
    this.categoriesService.createCategory(this.categoryForm.value).subscribe((res) => {
      console.log(res)
    })
  }

  ngOnInit(): void {
  }

}
