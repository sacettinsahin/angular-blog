import { Component, OnInit } from '@angular/core';
import { CategoritesService } from '../../services/categorites.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  permalink:string=""
  imgSrc:any="https://placehold.co/100x100"
  selectedImg:any
  categories:any[]
  
  postForm:FormGroup

  constructor(private categoryService: CategoritesService, private fb:FormBuilder) { 
    this.postForm = this.fb.group({
      title: ["" ,[Validators.required, Validators.minLength(10)]],
      permalink: ["",Validators.required],
      excerpt: ["",[Validators.required, Validators.minLength(50)]],
      category: ["",Validators.required],
      postImg: ["",Validators.required],
      content: ["",Validators.required],
    })
  }

  get fc(){
    return this.postForm.controls
  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe(res=>{
      this.categories = res
    })
  }

  onTitleChanged($event){
    const title = $event.target.value
    this.permalink= title.replace(/\s/g,"-")
  }
  showPreview($event){
    const reader = new FileReader()
    reader.onload = (e) => {
      this.imgSrc = e.target.result
    }

    reader.readAsDataURL($event.target.files[0])
    this.selectedImg = $event.target.files[0];
  }
}
