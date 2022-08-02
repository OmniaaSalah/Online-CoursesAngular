import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  
  constructor(private EmailDialog:MatDialog) { }

  ngOnInit(): void {
    
    
   
   
   
  }
  PopUpEmail()
  {
   
     
        this.EmailDialog.open(PopupComponent);
       
   
  }
  
  
}
