import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productDetails: any;

  public getProductDetails(product:any){
    console.log(product);
    this.productDetails = product;
  }

  public products=[
    {id:1,
    name:'product 1',
  price:1500,
  description:'This is a wi',
  imgUrl:"assets/images/home/dress.jpg"
    },
  
  {
    id:2,
    name:'product 2',
  price:1000,
  description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
  imgUrl:"assets/images/home/dress.jpg"
    }
  ,

      {id:3,
      name:'product 3',
    price:2400,
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgUrl:"assets/images/home/dress.jpg"
      },

    
        {id:4,
        name:'product 4',
      price:300,
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgUrl:"assets/images/home/dress.jpg"
        },
      

{id:5,
name:'product 5',
price:150,
description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
imgUrl:"assets/images/home/dress.jpg"
}]
}