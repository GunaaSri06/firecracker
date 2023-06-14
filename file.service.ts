import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class FileService {

  constructor(private http:HttpClient) { }
  datas :any[]=[];

  getData(){
    let url="http://localhost:4200/assets/user.json"
    this.http.get(url).subscribe({
      next: (res)=>{
        console.log(res);
        this.datas.push(res);
      },
      error: (err)=>{
        alert(err.message);
      }
    });
  }
  addMe(data:any){
    this.datas.push(data);
    // this.http.post
    return this.datas;
  }
  getDataFromNode(){
    let url = "http://localhost:4100/user";
    // return this.http.get(url).subscribe({
    //   next:(res)=>{
    //     console.log(res);
    //   },
    //   error: (err)=>{
    //     alert(err.message);
    //   }
    // })
    return this.http.get(url);
  }
  postData(user:any){
    let url = "http://localhost:4100/Createuser";
    return this.http.post(url,user);
  }
}
