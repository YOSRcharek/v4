import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
import { Image } from '../image';
@Component({
  selector: 'app-detail-ain',
  templateUrl: './detail-ain.component.html',
  styleUrls: ['./detail-ain.component.css']
})
export class DetailAinComponent implements OnInit {
  @Input() img :Image= new Image();
  HotelsAinDraham:Sejour;
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService) { }

  ngOnInit(): void {
    let libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsAinDraham=this.hotelsService.getHotelByLibHA(libelle);
  }

}
