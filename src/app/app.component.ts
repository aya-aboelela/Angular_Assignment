import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',    //myfirstapp-root
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_Project';
   
  @ViewChild(ProductsComponent) child: ProductsComponent;
  
  getProductsData(){
  this.child.renderValues();
  }

  ngAfterViewInit(): void {

  }
}
