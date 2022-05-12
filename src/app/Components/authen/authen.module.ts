import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminsComponent } from './admins/admins.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

const routes:Routes=[{path:"Login",component:LoginComponent},

{path:"Admins",component:AdminsComponent},
{path:"Register",component:RegisterComponent}]

@NgModule({
  declarations: [
    LoginComponent,
   
    RegisterComponent,
    AdminsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   RouterModule.forChild(routes),
   MatDialogModule,
  
   MatTableModule
    
  ]
})
export class AuthenModule { }
