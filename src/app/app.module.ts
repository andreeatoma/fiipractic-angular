import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import {CarouselModule} from 'angular2-carousel-ztw/carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import {SliderHomeComponent} from './slider-home/slider-home.component';
import { ProductDateComponent } from './product-date/product-date.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductComponent,
    ProductImageComponent,
    ProductDescriptionComponent,
    ProductDateComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SliderHomeComponent,
    MapComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
    CarouselModule,
    BrowserAnimationsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBj2BhI_aE1TbCaosjmShs0EHrolzIwcrY'
    }),
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
