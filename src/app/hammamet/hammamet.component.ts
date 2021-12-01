import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-hammamet',
  templateUrl: './hammamet.component.html',
  styleUrls: ['./hammamet.component.css']
})
export class HammametComponent implements OnInit {
  constructor(private hotelsService:HotelsService) { }
  HotelsHammamet:Sejour[] = [];
 

  ngOnInit(): void {
    this.HotelsHammamet=this.hotelsService.Hotelshammamet();
  }
}
