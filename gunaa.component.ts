import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElementRef,  ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { FileService } from './file.service';


@Component({
  selector: 'app-gunaa',
  templateUrl: './gunaa.component.html',
  styleUrls: ['./gunaa.component.css'],
  providers:[FileService]
})
export class GunaaComponent implements OnInit {
 
  
  filename: any;
  format: any;
  formfile: any;
  file:any;
  showLoader: boolean = false;
  emailId = "gunaasri.2001@gmail.com";
  password = "12345";
  hide = true;
  email=true;

  
  profileForm = new FormGroup({
  email : new FormControl("", [Validators.required, Validators.email]),
  pass : new FormControl("", [Validators.required]) 

});
  
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login3(){
     
    this.router.navigateByUrl('/vignesh');
       
  }
  login(){
    var email = this.profileForm.get('email')?.value;
    var pass = this.profileForm.get('pass')?.value;  
    console.log(email,pass);
    if(this.profileForm.valid) {
      if(this.emailId === email && this.password === pass){
        alert ("select your requireg portal");
         this.router.navigateByUrl('/customer');
        // this.http.post("http://127.0.0.1:5000/new/upload",this.formfile).subscribe((res)=>{console.log(res);
      }
      else{
          alert("please enter valid credentials");
        }
      }}
  customer(){
        
      //      var email = this.profileForm.get('email')?.value;
      //   var pass = this.profileForm.get('pass')?.value;  
      //   console.log(email,pass);
      //   if(this.profileForm.valid) {
      //     if(this.emailId === email && this.password === pass){ //alert ("welcome to new page");
            this.router.navigateByUrl('/gunaa');
      //       // this.http.post("http://127.0.0.1:5000/new/upload",this.formfile).subscribe((res)=>{console.log(res);
      //     }
            
      //     else{
      //         alert("please enter valid credentials");
      //       }
      // }
    }}
      
      // else{
      //   this._snackBar.open("Please select the file", "Ok", { duration: 3000 });
      // }
     
  
  