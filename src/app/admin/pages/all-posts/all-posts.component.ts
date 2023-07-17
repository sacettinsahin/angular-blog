import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {

  postArray:any[] = []

  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.loadData().subscribe(res=>{
      console.log(res)
      this.postArray = res
    })
  }

}
