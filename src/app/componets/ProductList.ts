import { Iproduct } from "./iproduct"
// class Product implements Iproduct{
//   id: number;
//   name: string;
//   quantity: number;
//   price: number;
//   img: string;
//   /**
//    *
//    */
//   constructor(img:string,id:number,name:string,quantity:number,price:number) {
//     this.id=id;
//     this.name=name;
//     this.price=price;
//     this.img=img;
//     this.quantity=quantity;
//   }

// }

export let arrProduct :Iproduct[]=[
  {
    id:1,
    name:'camera',
    quantity:2,
    price:500,
    img:"assets/imgs/4.jpg",
  },
  {
    id:2,
    name:'laptop',
    quantity:3,
    price:2500,
    img:"assets/imgs/5.jpg",
  },
  {
    id:3,
    name:'Cap',
    quantity:5,
    price:100,
    img:"assets/imgs/6.jpg",
  },
  {
    id:4,
    name:'Pullover',
    quantity:9,
    price:500,
    img:"assets/imgs/7.jpg",
  },
  {
    id:5,
    name:'Bag',
    quantity:1,
    price:500,
    img:"assets/imgs/8.jpg",
  },
  {
    id:6,
    name:'shoes',
    quantity:0,
    price:500,
    img:"assets/imgs/10.jpg",
  }
]
