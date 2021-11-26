import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
  burzum1:string;
  constructor() { 
    this.burzum1 = "terzo"
  }

  ngOnInit(): void {
  }

}
