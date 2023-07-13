import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore"
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"


@Injectable({
  providedIn: 'root'
})
export class CategoritesService {

  constructor(private afs:AngularFirestore , private toastr:ToastrService) { }

  //post
  saveData(data){
    this.afs.collection("categories").add(data).then(docRef=>{
      console.log(docRef)
      this.toastr.success("This data saved successfuly..!","")
    })
    .catch((err)=> {
      console.log(err)}
    )
  }

  //get
  loadData(){
    return this.afs.collection("categories").snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=> {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id,data}
        })
      })
    )
  }

  updateData(id, EditData){
    this.afs.doc(`categories/${id}`).update(EditData).then(docRef=>{
      this.toastr.success("This data Updated Successfully!")
    })
  }

  deleteData(id){
    this.afs.doc(`categories/${id}`).delete().then(docRef=>{
      this.toastr.success("This data Deleted Successfully!")
    })
  }
}
