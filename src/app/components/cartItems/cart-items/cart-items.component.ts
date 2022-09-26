import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  carts:Array<any>=[]
  cart:any={
    subtotal:0,
  }
  total:number=0
  constructor(private router:Router) {
    this.carts=JSON.parse(localStorage.getItem("Cart")!)

    if (this.carts.length===0) {
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'The cart is empty',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/'])
    }
   }

  ngOnInit(): void {
    this.getCart()
    
  }

  deleteItem(id:number){
    console.log(id);
    this.carts=JSON.parse(localStorage.getItem("Cart")!)
    for (let i = 0; i < this.carts.length; i++) {
     
      if(this.carts[i].id===id){
        this.total=this.total-this.carts[i].subtotal
        this.carts.splice(i,1)
        localStorage.setItem("Cart",JSON.stringify(this.carts))
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Removed product',
          showConfirmButton: false,
          timer: 1500
        })
        this.emptyCart()
      }
      
    }
  }
  emptyCart(){
    if (this.carts.length===0) {
      this.router.navigate(['/'])
    }
  }
  increase(id:number){
    this.carts=JSON.parse(localStorage.getItem("Cart")!)
    for (let i = 0; i < this.carts.length; i++) {
     
      if (this.carts[i].id===id) {
        if (this.carts[i].quantity>=19) {
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'You can only add 20',
            showConfirmButton: false,
            timer: 1500
          })
        }
        this.carts[i].quantity=this.carts[i].quantity + 1
        this.carts[i].subtotal=this.carts[i].quantity*this.carts[i].price
        this.total=this.total+this.carts[i].price
      localStorage.setItem("Cart",JSON.stringify(this.carts)) 
      }
    }
  }
  decrease(id:number){
    this.carts=JSON.parse(localStorage.getItem("Cart")!)
    for (let i = 0; i < this.carts.length; i++) {
   
      if (this.carts[i].id===id) {
        this.carts[i].quantity=this.carts[i].quantity - 1
        this.carts[i].subtotal=this.carts[i].subtotal-this.carts[i].price
        this.total=this.total-this.carts[i].price
      localStorage.setItem("Cart",JSON.stringify(this.carts))
      }
      
    }
  }
  getCart(){
    this.carts=JSON.parse(localStorage.getItem("Cart")!)
    for (let i = 0; i < this.carts.length; i++) {
      this.carts[i].subtotal=this.carts[i].quantity*this.carts[i].price
      this.total=this.total+this.carts[i].subtotal
      localStorage.setItem("Cart",JSON.stringify(this.carts))
    }
  }
  formatSubtotalAndTotal(){

  }
}
