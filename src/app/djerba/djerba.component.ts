import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-djerba',
  templateUrl: './djerba.component.html',
  styleUrls: ['./djerba.component.css']
})
export class DjerbaComponent implements OnInit {

  constructor(private hotelsService:HotelsService) { }
  Hotelsdjerba:Sejour[] = [];
 

  ngOnInit(): void {
    this.Hotelsdjerba=this.hotelsService.HoteleDjerba();
  }

}
