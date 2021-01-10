import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products: Products[] = [] 
  // = [
  //   {name: 'photo1', price: 20 , photoUrl: 'assets/download.jpg'},
  //   {name: 'photo2', price: 20 , photoUrl: 'assets/download (1).jpg'},
  //   {name: 'photo3', price: 20 , photoUrl: 'assets/download (2).jpg'}
  // ]

  constructor( private productsService : ProductsService , private title: Title) {
    this.title.setTitle('Home');
   }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productsService.getAllProducts().subscribe((data) =>{
      
     this.products= data;
     console.log(data)
     
      },
      err => console.error(err),
      () => console.log('done loading products')
     
    );
  }
}
