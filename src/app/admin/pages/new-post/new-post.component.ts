import { Component, OnInit } from '@angular/core';
import { CategoritesService } from '../../services/categorites.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  permalink: string = '';
  imgSrc: any = 'https://placehold.co/100x100';
  //"./assets/placeholder-image.jpg"
  selectedImg: any;
  categories: any[];

  postForm: FormGroup;

  constructor(
    private categoryService: CategoritesService,
    private fb: FormBuilder,
    private postService: PostsService,
    private route:ActivatedRoute
  ) {

    this.route.queryParams.subscribe(val=>{
      console.log(val)
      this.postService.loadOneData(val.id).subscribe(post=>{
        console.log("post",post)
      })
    })

    

    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      permalink: ['', Validators.required],
      excerpt: ['', [Validators.required, Validators.minLength(50)]],
      category: ['', Validators.required],
      postImg: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get fc() {
    return this.postForm.controls;
  }

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((res) => {
      this.categories = res;
    });
  }

  onTitleChanged($event) {
    const title = $event.target.value;
    this.permalink = title.replace(/\s/g, '-');
  }
  showPreview($event) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imgSrc = e.target.result;
    };

    reader.readAsDataURL($event.target.files[0]);
    this.selectedImg = $event.target.files[0];
  }
  onSubmit() {
    console.log(this.postForm.value);

    let splittedCategoryArray = this.postForm.value.category.split("-");


    const postData: Post = {
      title: this.postForm.value.title,
      permalink: this.postForm.value.permalink,
      category: {
        categoryId: splittedCategoryArray[0],
        category: splittedCategoryArray[1],
      },
      postImgPath: "",
      excerpt: this.postForm.value.excerpt,
      content: this.postForm.value.content,
      isFeatured: false,
      views: 0,
      status: "new",
      createdAt: new Date(),
    };

    //this.postService.uploadImage(this.selectedImg, postData) 06.25
    this.postForm.reset();
    this.imgSrc = "https://placehold.co/100x100"
    this.postService.saveData(postData)
  }
}
