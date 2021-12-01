import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-tozeur',
  templateUrl: './tozeur.component.html',
  styleUrls: ['./tozeur.component.css']
})
export class TozeurComponent implements OnInit {
  constructor(private hotelsService:HotelsService) { }
  hotelstoz:Sejour[] = [];
 

  ngOnInit(): void {
    this.hotelstoz=this.hotelsService.Hotelstozeur();
  }


}
