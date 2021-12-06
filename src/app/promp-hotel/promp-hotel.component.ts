import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
@Component({
  selector: 'app-promp-hotel',
  templateUrl: './promp-hotel.component.html',
  styleUrls: ['./promp-hotel.component.css']
})
export class PrompHotelComponent implements OnInit {

  constructor(private hotelsService:HotelsService) { }
  hotelsTunis:Sejour[] = [];
  hotelsHammamet:Sejour[] = [];
  hotelsDjerba:Sejour[]=[]; 
  hotelsTozeur:Sejour[]=[]; 
  ngOnInit(): void {
    this.hotelsTunis=this.hotelsService.PromoHotelstunis();
    this.hotelsHammamet=this.hotelsService.PromoHotelsHammamet();
    this.hotelsDjerba=this.hotelsService.PromoHotelsDjerba();
    this.hotelsTozeur=this.hotelsService.PromoHotelsTozeur();
  }
  
}
