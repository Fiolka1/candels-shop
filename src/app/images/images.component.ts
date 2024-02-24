import { NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor, NgIf,NgSwitch,NgSwitchCase,NgStyle],
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
        race:'Sweet',
        keyNotes:'blend of dark chocolate, black cherry,moonlit roses'
    },
    {
      source: 'assets/images/candles/midnight-2.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet',
        keyNotes:'blend of dark chocolate, black cherry,moonlit roses'
    },
    {
      source: 'assets/images/candles/midnight-3.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet',
        keyNotes:'blend of dark chocolate, black cherry,moonlit roses'
    },
    {
      source: 'assets/images/candles/midnight-4.jpg',
      alternate: 'Midnight',
      description:
        'A mysterious blend of dark chocolate, black cherry, and whispers of moonlit roses.',
        race:'Sweet',
        keyNotes:'blend of dark chocolate, black cherry,moonlit roses'
    },

    {
      source: 'assets/images/candles/AutumnHarvest-1.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral',
        keyNotes:'aroma of crisp apple, cinnamon spice, toasted pecan'
    },
    {
      source: 'assets/images/candles/AutumnHarvest-2.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral',
        keyNotes:'aroma of crisp apple, cinnamon spice, toasted pecan'
    },
    {
      source: 'assets/images/candles/AutumnHarvest-3.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral',
        keyNotes:'aroma of crisp apple, cinnamon spice, toasted pecan'
    },
    {
      source: 'assets/images/candles/AutumnHarvest-4.jpg',
      alternate: 'Autumn Harvest',
      description:
        'The comforting aroma of crisp apple, cinnamon spice, and a touch of toasted pecan.',
        race:'Floral',
        keyNotes:'aroma of crisp apple, cinnamon spice, toasted pecan'
    },
  ];
  candles_menu = [
    {
      source: '',
      alternate: '',
      race:'',
      keyNotes:''
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
          race:'Sweet',
          keyNotes:'zesty lemon, tangy grapefruit, orange blossom'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/CozyCampfire-' + [index] + '.jpg',
        alternate: 'Cozy Campfire',
        description:
          'The perfect combination of smoky cedarwood, toasted marshmallows, and a touch of cinnamon spice.',
          race:'Woody',
          keyNotes:'smoky cedarwood, toasted marshmallows, cinnamon spice'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/GoldenSunset-' + [index] + '.jpg',
        alternate: 'Golden Sunset',
        description:
          ' A warm and inviting mix of amber, vanilla bean, and a hint of sandalwood.',
          race:'Floral',
          keyNotes:'mix of amber, vanilla bean, sandalwood'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/LibraryNostalgia-' + [index] + '.jpg',
        alternate: 'Library Nostalgia',
        description:
          'It could capture the scent of old books, with notes of aged paper, weathered leather, and a hint of vanilla.',
          race:'Mystical',
          keyNotes:'scent of old books,'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/MoonlitGarden-' + [index] + '.jpg',
        alternate: 'Moonlit Garden',
        description:
          ' A romantic combination of night-blooming jasmine, delicate lily of the valley, and a hint of moonflower.',
          race:'Floral',
          keyNotes:'combination of jasmine, lily, moonflower'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/MysticMoonstone-' + [index] + '.jpg',
        alternate: 'Mystic Moonstone',
        description:
          'A captivating blend of lavender, bergamot, and a sprinkle of moonlit jasmine.',
          race:'Mystical',
          keyNotes:'blend of lavender, bergamot, jasmine'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/WhimsicalDreams-' + [index] + '.jpg',
        alternate: 'Whimsical Dreams',
        description:
          'A magical fusion of cotton candy, sparkling lemonade, and a touch of rainbow sherbet.',
          race:'Sweet',
          keyNotes:'fusion of cotton candy, sparkling lemonade,rainbow sherbet'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/WhisperingWoods-' + [index] + '.jpg',
        alternate: 'Whispering Woods',
        description:
          ' A blend of fresh pine, crisp eucalyptus, and a touch of misty rain.',
          race:'Floral',
          keyNotes:'blend of fresh pine, crisp eucalyptus, misty rain'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/DeerSkull-' + [index] + '.jpg',
        alternate: 'Deer Skull',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a deer skull.',
          race:'Skull candles',
          keyNotes:'classic soy candle'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/HumanSkull-' + [index] + '.jpg',
        alternate: 'Human Skull',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a human skull.',
          race:'Skull candles',
          keyNotes:'human skull'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/WolfSkull-' + [index] + '.jpg',
        alternate: 'Wolf Skull',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a wolf skull.',
          race:'Skull candles',
          keyNotes:'delicate vanilla scent'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/Crystalamethystcandle-' + [index] + '.jpg',
        alternate: 'Amethyst Candle',
        description:
          'A unclassic candle with a delicate magical scent, shaped like a amethyst.',
          race:'Crystal candles',
          keyNotes:'magical scent'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/Crystalcandle-' + [index] + '.jpg',
        alternate: 'Crystal Candle',
        description:
          'A candle with a cave scent, shaped like a crystal.',
          race:'Crystal candles',
          keyNotes:'cave scent'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/FaceStatueCandle-' + [index] + '.jpg',
        alternate: 'Face statue',
        description:
          'A classic soy candle with a delicate vanilla scent, shaped like a human face.',
          race:'Statue candles',
          keyNotes:'human face'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/Handstatuecandle-' + [index] + '.jpg',
        alternate: 'Hand statue',
        description:
          'A honey candle with a delicate flowers scent, shaped like a human hand.',
          race:'Statue candles',
          keyNotes:'human hand'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/HumanLegStatueCandle-' + [index] + '.jpg',
        alternate: 'Leg statue',
        description:
          'A vanilla candle with a sweat scent, shaped like a human leg.',
          race:'Statue candles',
          keyNotes:'sweat scent'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 5; index++) {
      let candle_object = {
        source: 'assets/images/candles/CrystalEmeraldCandle-' + [index] + '.jpg',
        alternate: 'Emerald candle',
        description:
          'A green candle with a cut grass scent, shaped like a emerald.',
          race:'Crystal candles',
          keyNotes:'grass scent'
      };
      this.candles.push(candle_object);
    }
    for (let index = 1; index < 4; index++) {
      let candle_object = {
        source: 'assets/images/candles/CrystalRubinCandle-' + [index] + '.jpg',
        alternate: 'Rubin candle',
        description:
          'A raspberry candle with a delicate strawberry scent, shaped like a rubin.',
          race:'Crystal candles',
          keyNotes:'strawberry scent'
      };
      this.candles.push(candle_object);
    }
    for (let index = 0; index < 8; index++) {
      let random_candle = Math.floor(Math.random() * 79);
      this.candles_menu.unshift(this.candles[random_candle]);
    }
    this.candles_menu.pop();
    console.log(this.candles_visibility_choosen)
  }
  choosen_candleURL = '';
  choosen_candleDescription = '';
  candle_KeyNotes=''
  candleFull(ewent: any) {
    let candleNames = ewent;
    this.choosen_candleURL = candleNames;
    console.log(candleNames);
    for (let index = 0; index < this.candles.length; index++) {
      if (this.choosen_candleURL === this.candles[index].source) {
        this.choosen_candleDescription = this.candles[index].description;
        this.candle_KeyNotes=this.candles[index].keyNotes;
      }
    }
    console.log(this.candles_visibility_race)
    console.log(this.candle_race_name+'something')
  }
  candleSize(){
    return Math.floor(Math.random() * 12)+13
  }
}
