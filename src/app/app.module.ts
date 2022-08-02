import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import{MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './Components/popup/popup.component';
import { CourseAndBootCampComponent } from './Components/course-and-boot-camp/course-and-boot-camp.component';
import { AboutUsComponent } from './Components/basic/about-us/about-us.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
    EmptyLayoutComponent,
    CourseAndBootCampComponent,
    AboutUsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
   
    
   
  ],
  entryComponents: [PopupComponent],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
