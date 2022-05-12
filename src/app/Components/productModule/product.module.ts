import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';

import { MatTableModule } from '@angular/material/table' 
import { PopupComponent } from '../popup/popup.component';
import { FormsModule } from '@angular/forms';

import { NewProductComponent } from './new-product/new-product.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


const routes:Routes=[{path:"EditProduct/:pID",component:NewProductComponent},
//{path:"AddProduct",component:NewProductComponent},


{path:'',component:ProductsComponent}]

@NgModule({
  declarations: [
    ProductsComponent,
  
    NewProductComponent,
    PopupComponent
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule
   
    
  
    
    
  ]
})
export class ProductModule { }
