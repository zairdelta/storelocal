import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { product } from 'src/app/models/products';
import {data} from 'src/app/data/data'
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:Array<any>=data;
  cart:Array<any>=[];
  countCart:number=0
  product:product={
    id:0,
    name:'',
    price:0,
    image: '',
    description:'',
    quantity:0,
    subtotal:0
  }
  local:any=[]
  constructor(private products:StoreService,private route:Router) { 
  }
  
  ngOnInit(): void {

    if (!localStorage.getItem("Cart")) {
      localStorage.setItem("Cart","[]")
    }

  this.getCard()
    console.log(this.route.url);
  }

  saveProduct(id:string){
    
    console.log(id,"ID");
    this.cart=JSON.parse(localStorage.getItem("Cart")!)
    if (this.cart.length==0) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id==id) {
          this.cart.push({
            "id":this.data[i].id,
            "name":this.data[i].title,
            "price":this.data[i].price,
            "image":this.data[i].image,
            "description":this.data[i].description,
            "quantity":1,
            "subtotal":0
          })
  
          localStorage.setItem("Cart",JSON.stringify(this.cart))
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added product',
            showConfirmButton: false,
            timer: 1500
          })
          this.getCard()
          return
        }
      }
    

    }
      
      for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id===id) {
        this.cart[i].quantity=this.cart[i].quantity + 1

        localStorage.setItem("Cart",JSON.stringify(this.cart))
        this.getCard()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Added product',
          showConfirmButton: false,
          timer: 1500
        })
        return
        }
        
      }
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].id==id) {
          this.cart.push({
            "id":this.data[i].id,
            "name":this.data[i].title,
            "price":this.data[i].price,
            "image":this.data[i].image,
            "description":this.data[i].description,
            "subtotal":0,
            "quantity":1
          })
          localStorage.setItem("Cart",JSON.stringify(this.cart))
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added product',
            showConfirmButton: false,
            timer: 1500
          })
          this.getCard()        }
      }
      
    }
    getCard(){
      this.countCart=0
      this.cart=JSON.parse(localStorage.getItem("Cart")!)
      for (let e = 0; e < this.cart.length; e++) {
        this.countCart=this.countCart + this.cart[e].quantity
      }
      this.products.setCountCart=this.countCart
    }
  

}
