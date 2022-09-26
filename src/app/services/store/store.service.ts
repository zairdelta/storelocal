import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private sharingCountCart = new BehaviorSubject(0)
  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get("https://my-store33.p.rapidapi.com/catalog/products")
  }
  get CountCart(){
    return this.sharingCountCart.asObservable();
  }
  set setCountCart(Cart:number){
    this.sharingCountCart.next(Cart)
  }
}
