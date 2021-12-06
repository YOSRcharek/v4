import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
@Input() img :Image= new Image();
  constructor() { }

  ngOnInit(): void {
  }

}
