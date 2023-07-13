import { Component, OnInit } from '@angular/core';
import { CategoritesService } from '../../services/categorites.service';

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

  constructor(private categoryService: CategoritesService) { }

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
