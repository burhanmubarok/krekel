import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'krekel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: any
  companyName: any
  author: any

  constructor() { 
    this.year = new Date().getFullYear()
    this.companyName = 'Krekel'
    this.author = '@burhanmubarok'
  }

  ngOnInit() {
  }

}
