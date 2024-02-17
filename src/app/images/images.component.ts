import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [NgFor],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {

}
