import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Shared/Iproduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  ProductList :IProduct[]=[
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
  
  @Output() childEvent = new EventEmitter();

  constructor(){
  }

  SendData(){

    this.childEvent.emit(this.ProductList);
  }
  sayWelcome(){
    alert("Welcome I'm Aya !!")
  }
}
