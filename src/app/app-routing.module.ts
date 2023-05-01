import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { JewelleryPageComponent } from './jewellery-page/jewellery-page.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'search/:searchItem', component:HomeComponent},
  { path: 'tag/:tag', component:HomeComponent},
  { path: 'jewell/:id', component:JewelleryPageComponent},
  { path: 'cart-page', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
