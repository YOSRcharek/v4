import { Component, OnInit } from '@angular/core';
import { Sejour } from '../models/sejour';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-detail-toz',
  templateUrl: './detail-toz.component.html',
  styleUrls: ['./detail-toz.component.css']
})
export class DetailTozComponent implements OnInit {

  libelle=0;
  HotelsTozeur:Sejour[] = [];
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
    this.libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsTozeur=this.hotelsService.Hotelstozeur();
  }

}