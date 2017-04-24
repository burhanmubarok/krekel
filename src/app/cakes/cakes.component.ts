import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'krekel-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  products: any;

  constructor() {
    this.products =   [
    {image: '105', category: 'Whole Cakes'},
    {image: '104', category: 'Macarons'},
    {image: '106', category: 'Ice Cream Cakes'},
    {image: '107', category: 'Hampers'},
    {image: '57', category: 'Chocolate'},
    {image: '58', category: 'Cookies'},
    {image: '59', category: 'Wedding Cakes'},
    {image: '64', category: 'French Pastries'},
    ]
   }

  ngOnInit() {
  }

}
