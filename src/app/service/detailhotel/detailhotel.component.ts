import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sejour } from 'src/app/models/sejour';
import { HotelsService } from '../hotel.service';
@Component({
  selector: 'app-detailhotel',
  templateUrl: './detailhotel.component.html',
  styleUrls: ['./detailhotel.component.css']
})
export class DetailhotelComponent implements OnInit {
  
  HotelsTunis: Sejour;
  recommander(i:number){
    return this.HotelsTunis[i].avis++;
    
   }
   prev(i:Number){
     for(let k=0;k<this.HotelsTunis.tableau_img.length;k++)
            return this.HotelsTunis[k].tableau_img[i];
   }
  

   
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }
  
  ngOnInit(): void {
   let libelle = this.activatedRoute.snapshot.params['libelle'];
     this.HotelsTunis=this.hotelsService.getHotelByLib(libelle);
    }

}
