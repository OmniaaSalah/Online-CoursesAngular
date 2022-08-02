import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { MatDialogModule } from '@angular/material/dialog';



const routes: Routes = 
[
  
  {path:'',component:MainLayoutComponent,children:[
  {path:'',redirectTo:'/Home',pathMatch:'full'},
   {path:'Home',component:HomeComponent}
  ]},

  {path:'',component:EmptyLayoutComponent,children:[
    {path:'**',component:NotFoundComponent}
  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, MatDialogModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
