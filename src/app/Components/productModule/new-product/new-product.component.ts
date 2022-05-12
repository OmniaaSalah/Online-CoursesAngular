import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatogryAPIService } from 'src/app/Services/catogry-api.service';
import { ProductsAPIService } from 'src/app/Services/products-api.service';
import { Icatogry } from 'src/app/View Models/icatogry';
import { Iproduct } from 'src/app/View Models/iproduct';
import { Location } from '@angular/common';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  newproduct:Iproduct;
  currentprdid:number=0;
  currentprd:Iproduct|undefined=undefined;
  Catogrylist:Icatogry[]=[];
  constructor(private prodapiservice:ProductsAPIService,private router:Router,private catogryapiservice:CatogryAPIService,private activatedroute:ActivatedRoute,private location:Location) { this.newproduct= {"id":10,
  name:"Iphone13pro max",
  quantity:5,"price":25000,
  img:"assets/Iphone13pro max.jpg",
  CateogryiD:1},
  this.newproduct=this.prodapiservice.newproduct;
}

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe(param=>{
      this.currentprdid=Number(param.get('pID'));
      if(this.currentprdid!=0&&this.currentprdid.toString()!='')
      {this.prodapiservice.getProductByID(this.currentprdid).subscribe(prolist=>{this.newproduct=prolist});}
    });

     this.catogryapiservice.getAllproduct().subscribe(catlist=>{this.Catogrylist=catlist});
    // this.activatedroute.paramMap.subscribe(param=>{
    //   this.currentprdid=Number(param.get('pID'));
    //   this.prodapiservice.getProductByID(this.currentprdid).subscribe(prolist=>{this.currentprd=prolist});
    // });
    
  }
  SaveProduct( product:Iproduct){
   
    if(this.currentprdid==0||this.currentprdid.toString()=='')
     {console.log('Newwwwwwwwww');
       if(confirm("Are you sure to Add "+product?.name))
       {this.prodapiservice.AddProduct(this.newproduct).subscribe(pro=>{this.router.navigate(['/Products'])});}
      }
     else
     {console.log('edittttttttt');
     if(confirm("Are you sure to Update "))
      {console.log(product);
        this.prodapiservice.EditProduct(product,this.currentprdid).subscribe(pro=>{this.router.navigate(['/Products/'+this.currentprdid])});}
     }
  }

  CancelAction()
  {
    this.location.back();
  }
}
