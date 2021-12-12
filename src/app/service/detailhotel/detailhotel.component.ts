import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/image';
import { Sejour } from 'src/app/models/sejour';
import { HotelsService } from '../hotel.service';
import { Reservation } from 'src/app/reservation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-detailhotel',
  templateUrl: './detailhotel.component.html',
  styleUrls: ['./detailhotel.component.css']
})
export class DetailhotelComponent implements OnInit {
  @Input() img :Image= new Image();
  HotelsTunis: Sejour;
  HotelForm:FormGroup;
  recommander(i:number){
    return this.HotelsTunis[i].avis++;
   }
   res:Reservation;
    prix(){
     
    } 
    onSubmitForm(){
      console.log(this.HotelForm.value);
      console.log(this.HotelForm.get('NombreCh')?.value);
    }
    Ajouter(){
     this.hotelsService.ajouter(this.res);
    }
   
  constructor(  private activatedRoute:ActivatedRoute,private hotelsService:HotelsService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
   let libelle = this.activatedRoute.snapshot.params['libelle'];
     this.HotelsTunis=this.hotelsService.getHotelByLib(libelle);
    
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
