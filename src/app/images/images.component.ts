import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css',
})
export class ImagesComponent {
  candles = [
    {
      source: 'assets/images/candles/midnight-1.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet'
    },
    {
      source: 'assets/images/candles/midnight-2.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet'
    },
    {
      source: 'assets/images/candles/midnight-3.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet'
    },
    {
      source: 'assets/images/candles/midnight-4.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet'
    },

    {
      source: 'assets/images/candles/AutumnHarvest-1.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral'
    },
    {
      source: 'assets/images/candles/AutumnHarvest-2.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral'
    },
    {
      source: 'assets/images/candles/AutumnHarvest-3.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral'
    },
    {
      source: 'assets/images/candles/AutumnHarvest-4.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral'
    },
  ];
  candles_menu = [
    {
      source: '',
      alternate: '',
      race:''
    },
  ];
  @Input() candles_visibility_default = true;
  @Input() candles_visibility_choosen = false;
  @Input() candles_visibility_race = false;
  @Input() candle_race_name=""
  ngOnInit() {
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/CitrusZephyr-' + [index] + '.jpg',
        alternate: 'Citrus Zephyr',
        description:
          ' A refreshing fusion of zesty lemon, tangy grapefruit, and a breeze of sweet orange blossom.',
          race:'Sweet'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/CozyCampfire-' + [index] + '.jpg',
        alternate: 'Cozy Campfire',
        description:
          'The perfect combination of smoky cedarwood, toasted marshmallows, and a touch of cinnamon spice.',
          race:'Woody'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/GoldenSunset-' + [index] + '.jpg',
        alternate: 'Golden Sunset',
        description:
          ' A warm and inviting mix of amber, vanilla bean, and a hint of sandalwood.',
          race:'Floral'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/LibraryNostalgia-' + [index] + '.jpg',
        alternate: 'Library Nostalgia',
        description:
          'It could capture the scent of old books, with notes of aged paper, weathered leather, and a hint of vanilla.',
          race:'Mystical'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/MoonlitGarden-' + [index] + '.jpg',
        alternate: 'Moonlit Garden',
        description:
          ' A romantic combination of night-blooming jasmine, delicate lily of the valley, and a hint of moonflower.',
          race:'Floral'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/MysticMoonstone-' + [index] + '.jpg',
        alternate: 'Mystic Moonstone',
        description:
          'A captivating blend of lavender, bergamot, and a sprinkle of moonlit jasmine.',
          race:'Mystical'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/WhimsicalDreams-' + [index] + '.jpg',
        alternate: 'Whimsical Dreams',
        description:
          'A magical fusion of cotton candy, sparkling lemonade, and a touch of rainbow sherbet.',
          race:'Sweet'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/WhisperingWoods-' + [index] + '.jpg',
        alternate: 'Whispering Woods',
        description:
          ' A blend of fresh pine, crisp eucalyptus, and a touch of misty rain.',
          race:'Floral'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/DeerSkull-' + [index] + '.jpg',
        alternate: 'Deer Skull',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a deer skull.',
          race:'Skull_candles'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/HumanSkull-' + [index] + '.jpg',
        alternate: 'Human Skull',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a human skull.',
          race:'Skull_candles'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/WolfSkull-' + [index] + '.jpg',
        alternate: 'Wolf Skull',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a wolf skull.',
          race:'Skull_candles'
      };
      this.candles.push(candle_object);
    }
    for (let index = 0; index < 8; index++) {
      let random_candle = Math.floor(Math.random() * 52);
      this.candles_menu.unshift(this.candles[random_candle]);
    }
    this.candles_menu.pop();
  }
  choosen_candleURL = '';
  choosen_candleDescription = '';
  candleFull(ewent: any) {
    let candleNames = ewent;
    this.choosen_candleURL = candleNames;
    console.log(candleNames);
    for (let index = 0; index < this.candles.length; index++) {
      if (this.choosen_candleURL === this.candles[index].source) {
        this.choosen_candleDescription = this.candles[index].description;
      }
    }
    console.log(this.candles_visibility_race)
    console.log(this.candle_race_name+'something')
  }
  
}
