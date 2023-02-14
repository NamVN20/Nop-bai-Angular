import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  products = [
    {
      title: 'PlayStation5',
      description: 'NEW',
      price: 500,
      image: '../assets/img1.png'
    },
    {
      title: 'The Last of Us Part 2',
      description: 'Out of stock',
      price: 40,
      image: '../assets/img8.webp'
    },
    {
      title: 'Elden Ring',
      description: 'OLD',
      price: 60,
      image: '../assets/img3.jpeg'
    },
    {
      title: 'God of War: Ragnarok',
      description: 'NEW',
      price: 60,
      image: '../assets/img6.jpeg'
    },
    {
      title: 'Hogwart Legacy',
      description: 'NEW',
      price: 70,
      image: '../assets/img7.jpeg'
    }, 
  ]
}
