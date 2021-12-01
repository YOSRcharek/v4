import { Component, OnInit } from '@angular/core';
import { Sejour } from 'src/app/models/sejour';
import { HotelsService } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  libelle=0;
  HotelsHammamet:Sejour[] = [];
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
    this.libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsHammamet=this.hotelsService.Hotelshammamet();
  }

}
