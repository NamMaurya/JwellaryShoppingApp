import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// executed these 2 commands before installing ng-starrating because while directly installing,there was some errors
// npm config set legacy-peer-deps true
// npm cache clean --force

// executed this command for installing ng-starrating
// npm install ng-starrating

import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { TagComponent } from './tag/tag.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { JewelleryPageComponent } from './jewellery-page/jewellery-page.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    JewelleryPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
