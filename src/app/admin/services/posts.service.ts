import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private storage:AngularFireStorage) { }

  uploadImage(selectedImage, postData){
    const filePath = `postIMG/${Date.now()}`

    this.storage.upload(filePath,selectedImage).then(()=>{
      console.log("upload img success")
    })

    this.storage.ref(filePath).getDownloadURL().subscribe(URL=>{
      postData.postImgPath = URL;
    })
  }
}
