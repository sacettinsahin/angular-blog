import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService
  ) {}

  uploadImage(selectedImage, postData) {
    const filePath = `postIMG/${Date.now()}`;
    console.log(filePath)

    this.storage.upload(filePath, selectedImage).then(() => {
      console.log('upload img success');
    });

    this.storage
      .ref(filePath)
      .getDownloadURL()
      .subscribe((URL) => {
        postData.postImgPath = URL;
        console.log("URL is:", URL)
        this.saveData(postData)
      });
  //     .toPromise()
  //     .then((URL) => {
  //     postData.postImgPath = URL;
  //     console.log("URL is:", URL);
  //     return this.afs.collection("posts").add(postData);
  //   })
  //   .then(() => {
  //     this.toastr.success("Data insert successfully...");
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     this.toastr.error("Error uploading image.");
  //   });
   }

  saveData(postData){
    this.afs.collection("posts").add(postData).then(docRef=>{
      this.toastr.success("Data insert successfully...");
    })
  }
}
