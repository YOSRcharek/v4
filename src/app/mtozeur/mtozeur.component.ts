import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
@Component({
  selector: 'app-mtozeur',
  templateUrl: './mtozeur.component.html',
  styleUrls: ['./mtozeur.component.css']
})
export class MTozeurComponent implements OnInit {
  constructor(private hotelsService:HotelsService) { }
  MTozeur:Sejour[]=[];
  

  ngOnInit(): void {
    this.MTozeur=this.hotelsService.MTozeur();
  }
  
}


  


