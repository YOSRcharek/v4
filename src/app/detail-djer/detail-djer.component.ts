import { Component, OnInit ,Input} from '@angular/core';
import { Sejour } from '../models/sejour';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../service/hotel.service';
import { Image } from '../image';
@Component({
  selector: 'app-detail-djer',
  templateUrl: './detail-djer.component.html',
  styleUrls: ['./detail-djer.component.css']
})
export class DetailDjerComponent implements OnInit {

  @Input() img :Image= new Image();
  HotelsDjerba:Sejour;
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
   let libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsDjerba=this.hotelsService.getHotelByLibD(libelle);
   
  }
  

}