import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { DetailComponent } from './detail/detail.component'
import {FormsModule} from '@angular/forms';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CheckouComponent } from './checkou/checkou.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    MyCartComponent,
    CheckouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'products', component : HomeComponent},
      { path: 'products/:id', component : DetailComponent},
      { path: 'cart', component: MyCartComponent},
      { path: 'checkout', component: CheckouComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
