import { Component, OnInit ,Input} from '@angular/core';
import { Sejour } from '../models/sejour';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../service/hotel.service';
import { Image } from '../image';

@Component({
  selector: 'app-detail-toz',
  templateUrl: './detail-toz.component.html',
  styleUrls: ['./detail-toz.component.css']
})
export class DetailTozComponent implements OnInit {

  @Input() img :Image= new Image();
  HotelsTozeur:Sejour;
  
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
   let libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsTozeur=this.hotelsService.getHotelByLibT(libelle);
  }

}