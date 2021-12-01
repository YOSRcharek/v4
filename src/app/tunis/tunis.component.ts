import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-tunis',
  templateUrl: './tunis.component.html',
  styleUrls: ['./tunis.component.css']
})
export class TunisComponent implements OnInit {
  constructor(private hotelsService:HotelsService) { }
  hotelsTunis:Sejour[] = [];

  ngOnInit(): void {
    this.hotelsTunis=this.hotelsService.Hotelstunis();
  }
  
  

}
