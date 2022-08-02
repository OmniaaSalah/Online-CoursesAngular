import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private EmailDialog:MatDialog) { 

  }

  ngOnInit(): void {
    
    

  }
  PopUpEmail()
{
 
   
      this.EmailDialog.open(PopupComponent);
     
 
}


 

}
