import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store/store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  countCart$:Observable<number> | undefined
  navbar:boolean=false
  constructor(products:StoreService,public router:Router) {
    this.countCart$=products.CountCart
    console.log(this.countCart$);
    
   }
  ngOnInit(): void {
    
  }
 

}
