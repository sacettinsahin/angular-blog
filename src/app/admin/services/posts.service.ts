import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private toastr: ToastrService,
    private  router:Router
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
      this.router.navigate(["/dashboard/posts"])
    })
  }

    //get
    loadData(){
      return this.afs.collection("posts").snapshotChanges().pipe(
        map(actions=>{
          return actions.map(a=> {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return {id,data}
          })
        })
      )
    }
}
