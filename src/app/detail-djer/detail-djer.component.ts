import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/image';
import { Sejour } from 'src/app/models/sejour';
import { HotelsService } from '../service/hotel.service';
import { Reservation } from 'src/app/reservation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail-djer',
  templateUrl: './detail-djer.component.html',
  styleUrls: ['./detail-djer.component.css']
})
export class DetailDjerComponent implements OnInit {

  @Input() img :Image= new Image();
  HotelsDjerba:Sejour;
  res:Reservation;
  
  Ajouter(){
   this.hotelsService.ajouter(this.res);
  }
 HotelForm:FormGroup;
constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService, private fb:FormBuilder) { }

ngOnInit(): void {
  let libelle = this.activatedRoute.snapshot.params['libelle'];
    this.HotelsDjerba=this.hotelsService.getHotelByLibD(libelle);
  this.HotelForm=this.fb.group({
    NombreCh:['',Validators.required],
    NombreA:['',Validators.required],
    NombreE:['',Validators.required],
    DateDep:['',Validators.required],
    DateAr:['',Validators.required],
    PrixJ:['',Validators.required]


  });
}
reserver(){
console.log(this.HotelForm.value);
}
get NombreCh(){
return this.HotelForm.controls.NombreCh;
}
get NombreA(){
  return this.HotelForm.controls.NombreA;
}
get NombreE(){
    return this.HotelForm.controls.NombreE;
}
get DateDep(){
return this.HotelForm.controls.DateDep;
}
get DateAr(){
return this.HotelForm.controls.DateAr;
} 
get prixJ(){
  return this.HotelForm.controls.prixJ;
  }  
}

