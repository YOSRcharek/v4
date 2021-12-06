import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelsService } from '../service/hotel.service';
import { Sejour } from '../models/sejour';
import { Reservation } from '../reservation';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Utilisateur!: FormGroup;
  user:string[]=[];
    HotelsTunis:Sejour[] = [];
    res:Reservation;
  
    Ajouter(){
     this.hotelsService.ajouter(this.res);
    }
   HotelForm:FormGroup;
  constructor(public lm:FormBuilder,public User:HotelsService,private router:Router,private hotelsService:HotelsService) { }
  dispo(){
    
  }

  onSubmit(){
    if((this.Utilisateur.value['username']==this.user[0])&&(this.Utilisateur.value['password']==this.user[1]))
    {this.router.navigateByUrl('/login');}
  }

  ngOnInit(): void {this.HotelsTunis=this.hotelsService.Hotelstunis();
    this.Utilisateur=this.lm.group({
      username:[''],
      password:['']
    });
    this.user=this.User.getuser();
    this.HotelForm=this.lm.group({
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

