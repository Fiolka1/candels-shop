import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {
 
  candles=[
    {

      source: 'assets/images/candles/midnight-1.jpg',
      alternate:"midnight-1",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-2.jpg',
      alternate:"midnight-2",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-3.jpg',
      alternate:"midnight-3",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-4.jpg',
      alternate:"midnight-4",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-1.jpg',
      alternate:"midnight-1",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-2.jpg',
      alternate:"midnight-2",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-3.jpg',
      alternate:"midnight-3",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-4.jpg',
      alternate:"midnight-4",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },

  ]
  candles_menu=[
    {
      source:"",
      alternate:""
    }
  ]
  ngOnInit()
  {
    for (let index = 0; index < 8; index++) {
      let random_candle=Math.floor(Math.random() * (8)) ;
    this.candles_menu.unshift(this.candles[random_candle]);
      
    }
  }
  
   
}
