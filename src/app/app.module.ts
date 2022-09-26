import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './pages/store/home/home.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { InterceptorService } from './interceptor.service';
import { CartComponent } from './pages/cart/cart/cart.component';
import { CartItemsComponent } from './components/cartItems/cart-items/cart-items.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
