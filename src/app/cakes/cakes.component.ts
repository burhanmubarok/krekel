import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'krekel-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  images: any;

  constructor() {
    this.images = [104, 105, 106, 107, 57, 58, 59, 64]
   }

  ngOnInit() {
  }

}
