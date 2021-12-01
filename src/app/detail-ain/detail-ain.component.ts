import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
@Component({
  selector: 'app-detail-ain',
  templateUrl: './detail-ain.component.html',
  styleUrls: ['./detail-ain.component.css']
})
export class DetailAinComponent implements OnInit {
  libelle=0;
  HotelsAinDraham:Sejour[] = [];
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
    this.libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsAinDraham=this.hotelsService.HotelAindraham();
  }

}
