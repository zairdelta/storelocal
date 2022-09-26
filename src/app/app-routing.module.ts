import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart/cart.component';
import { HomeComponent } from './pages/store/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"cart",
    component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
