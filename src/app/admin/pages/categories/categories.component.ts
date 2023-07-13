import { Component, OnInit } from '@angular/core';
import { CategoritesService } from '../../services/categorites.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoryResponse:any[] = []
  formCategory:string=""
  formStatus:string = "Add"
  categoryId:string
  categoryData:any

  constructor(private categoryService: CategoritesService) { }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((res) =>{
      console.log(res);
      this.categoryResponse=res
    })
  }

  onSubmit(formData){
    this.categoryData = {
      category: formData.value.category
    }
    if(this.formStatus == "Add"){
      this.categoryService.saveData(this.categoryData);
    }
    else if(this.formStatus == "Edit"){
      this.categoryService.updateData(this.categoryId, this.categoryData)
      this.formStatus="Add"
    }
    formData.reset()
  }

  onEdit(category, id){
    console.log(category)
    this.formCategory = category
    this.categoryId = id
    this.formStatus = "Edit"
  }
  onDelete(id){
    this.categoryService.deleteData(id)
  }
}
