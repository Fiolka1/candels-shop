import { Component, Input, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ImagesComponent } from './images/images.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgFor,ImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  visibility = false;
  candle_option_visability=false;
  candle_option_name="";
  candle_default=true ;
  candle_pick=true;
  changeVisibility(event:any)
  {
    this.candle_option_visability=true;
    let values=event;
    this.candle_option_name=values.srcElement.innerHTML;
    console.log(values.srcElement.innerHTML)
    this.candle_default=false;
    this.candle_pick=false;

    // document.getElementById()?.innerHTML
  }
}
