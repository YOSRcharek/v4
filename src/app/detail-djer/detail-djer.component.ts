import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../service/hotel.service';
@Component({
  selector: 'app-detail-djer',
  templateUrl: './detail-djer.component.html',
  styleUrls: ['./detail-djer.component.css']
})
export class DetailDjerComponent implements OnInit {

  libelle=0;
  HotelsDjerba:Sejour[] = [];
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
    this.libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsDjerba=this.hotelsService.HoteleDjerba();
  }

}