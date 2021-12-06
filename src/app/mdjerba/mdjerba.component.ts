import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
@Component({
  selector: 'app-mdjerba',
  templateUrl: './mdjerba.component.html',
  styleUrls: ['./mdjerba.component.css']
})
export class MDjerbaComponent implements OnInit {

  constructor(private hotelsService:HotelsService) { }
  MDjerba:Sejour[]=[];
  

  ngOnInit(): void {
    this.MDjerba=this.hotelsService.MDjerba();
  }
  
}
