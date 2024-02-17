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
      alternate:"Midnight",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-2.jpg',
      alternate:"Midnight",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-3.jpg',
      alternate:"Midnight",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },
    {
      source: 'assets/images/candles/midnight-4.jpg',
      alternate:"Midnight",
      description: "A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses."
    },

    {
      source: 'assets/images/candles/AutumnHarvest-1.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },
    {
      source: 'assets/images/candles/AutumnHarvest-2.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },
    {
      source: 'assets/images/candles/AutumnHarvest-3.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },
    {
      source: 'assets/images/candles/AutumnHarvest-4.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },

    {
      source: 'assets/images/candles/AutumnHarvest-1.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },
    {
      source: 'assets/images/candles/AutumnHarvest-2.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },
    {
      source: 'assets/images/candles/AutumnHarvest-3.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
    },
    {
      source: 'assets/images/candles/AutumnHarvest-4.jpg',
      alternate:"Autumn Harvest",
      description: "The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan."
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
      let random_candle=Math.floor(Math.random() * (40)) ;
    this.candles_menu.unshift(this.candles[random_candle]);
      
    }
    this.candles_menu.pop()
  }
  
   
}
