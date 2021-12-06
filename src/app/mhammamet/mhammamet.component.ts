import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';
@Component({
  selector: 'app-mhammamet',
  templateUrl: './mhammamet.component.html',
  styleUrls: ['./mhammamet.component.css']
})
export class MHammametComponent implements OnInit {

  constructor(private hotelsService:HotelsService) { }
  MHammamet:Sejour[]=[];
  

  ngOnInit(): void {
    this.MHammamet=this.hotelsService.Mhammamet();
  }
  
}


  