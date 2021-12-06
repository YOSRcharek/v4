import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
@Component({
  selector: 'app-mtunis',
  templateUrl: './mtunis.component.html',
  styleUrls: ['./mtunis.component.css']
})
export class MtunisComponent implements OnInit {
  constructor(private hotelsService:HotelsService) { }
  MTunis:Sejour[]=[];
  

  ngOnInit(): void {
    this.MTunis=this.hotelsService.Mtunis();
  }
  
}


  


