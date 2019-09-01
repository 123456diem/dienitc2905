import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import { BigProjectComponent } from './big-project/big-project.component';
import { ManagerProjectComponent } from './manager-project/manager-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdetailComponent,
    ProductComponent,
    BigProjectComponent,
    ManagerProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
