import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../Shared/Iproduct';
import { ICategory } from '../Shared/Icategory';
import { DiscountOffers } from '../Shared/discount-offers ';
import { ProductService } from 'src/services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
// Discount :DiscountOffers;
// StoreName :string;
// StoreLogo :string;
ProductList :IProduct[];
// CategoryList :ICategory[];
// ClientName :string;
// IsPurshased :boolean;

//constructor(){
// this.Discount= DiscountOffers.fifteenPerc;
// this.StoreName="Online Shopping";
// this.StoreLogo='../../assets/img/logo.png';
// this.ProductList=[
//   {
//   'ID':1,
//   'Name':'Apple',
//   'Quantity':100,
//   'Price':30,
//   'Image':"../../assets/img/Apple.jpg"

// },
// {
//   'ID':2,
//   'Name':'Green Beans',
//   'Quantity':50,
//   'Price':25,
//   'Image':'../../assets/img/Green Beans.jpg'

// },
// {
//   'ID':3,
//   'Name':'Carrots',
//   'Quantity':150,
//   'Price':50,
//   'Image':'../../assets/img/carrots.jpg'

// }
// ];
// this.CategoryList=[
//   {
//   'ID':1,
//   'Name':'Fashion'
//   },
//   {
//     'ID':2,
//     'Name':'Super Market'
//   },
//   {
//     'ID':3,
//     'Name':'Health & Beauty'
//   }
// ];
// this.ClientName="";
// this.IsPurshased=true;
//}
products:any=[];
errorMessage:any;
constructor(private productService: ProductService,private activatedRoute:ActivatedRoute,private router:Router)
{
  this.ProductList=[
    {
    'ID':1,
    'Name':'Apple',
    'Quantity':100,
    'Price':30,
    'Image':"../../assets/img/Apple.jpg"
  
  },
  {
    'ID':2,
    'Name':'Green Beans',
    'Quantity':50,
    'Price':25,
    'Image':'../../assets/img/Green Beans.jpg'
  
  },
  {
    'ID':3,
    'Name':'Carrots',
    'Quantity':150,
    'Price':50,
    'Image':'../../assets/img/carrots.jpg'
  
  }
  ];

}

renderValues(){
  this.productService.GetAllProducts().subscribe({
    next:data=>this.products = data,
    error:error=>this.errorMessage = error
  })
}

onclick(){
// this.IsPurshased = !this.IsPurshased;
}
productId:number;
product:IProduct | undefined;
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    this.productId =Number( params.get("ID"));
   })
}
onSelect(prod:any):void{
  if(this.productId){
    this.productService.GetProductById(prod.ID).subscribe({
      next:data=>this.product = data,
      error:error=>this.errorMessage = error
    })
  }
  else{
    alert("Invalid Id, Please Choose right Id");
  }
 
}
}
