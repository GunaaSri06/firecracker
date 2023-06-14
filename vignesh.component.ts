import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vignesh',
  templateUrl: './vignesh.component.html',
  styleUrls: ['./vignesh.component.css']
})
export class VigneshComponent implements OnInit {

  header = ["VENDOR","NAME","ADDRESS","CITY","PINCODE","COUNTRY"];
  public links = [
    {name: 'Dashboard',  icon: 'dashboard'},
    {name: 'Orders',  icon: 'assignment'}
    ];
  constructor(private router : Router , private http: HttpClient) { }
   venquota:any;
   
ngOnInit(): void {
  this.http.post("http://localhost:4040/venquota","").subscribe(resp=>{
    this.venquota = resp;
    console.log(this.venquota);
})
}
@Input() limit: number | undefined;
@Output() pageEvent = new EventEmitter();
  loading = true;
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  dataSource = [];
  displayedColumns = ['id', 'size', 'name', 'city', 'price', 'status', 'date'];
}
