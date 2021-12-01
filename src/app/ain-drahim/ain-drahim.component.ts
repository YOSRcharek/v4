import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-ain-drahim',
  templateUrl: './ain-drahim.component.html',
  styleUrls: ['./ain-drahim.component.css']
})
export class AinDrahimComponent implements OnInit {

  constructor(private hotelsService:HotelsService) { }
  HotelAinDraham:Sejour[] = [];
 

  ngOnInit(): void {
    this.HotelAinDraham=this.hotelsService.HotelAindraham();
  }

}
