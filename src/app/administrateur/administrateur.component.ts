import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {
  Utilisateur!: FormGroup;
  user:string[]=[];
    HotelsTunis:Sejour[] = [];
  
  constructor(public lm:FormBuilder,public User:HotelsService,private router:Router,private hotelsService:HotelsService) { }


  verif(){
    if((this.Utilisateur.value['username']==this.user[0])&&(this.Utilisateur.value['password']==this.user[1]))
    {this.router.navigate(['Best-Tunisia-Travel/backoffice']);
      return true;}
    else 
    {
      return false;}
  }

  ngOnInit(): void {this.HotelsTunis=this.hotelsService.Hotelstunis();
    this.Utilisateur=this.lm.group({
      username:[''],
      password:['']
    });
    this.user=this.User.getuser();
  }

}
