import { Component, OnInit } from '@angular/core';
import { MService } from '../service/m.service';
import { Sejour } from '../models/sejour';
@Component({
  selector: 'app-mtunis',
  templateUrl: './mtunis.component.html',
  styleUrls: ['./mtunis.component.css']
})
export class MtunisComponent implements OnInit {
  constructor(private mService:MService) { }
  MTunis:Sejour[]=[];
  

  ngOnInit(): void {
    this.MTunis=this.mService.mtunis();
  }
  
}


  


