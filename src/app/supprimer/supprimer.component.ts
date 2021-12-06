import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {
  Supprimer!:FormGroup;
  produit:Sejour=new Sejour();
  alert:string='';
  constructor(public lm:FormBuilder,public service:HotelsService,) { }

  ngOnInit(): void {
    this.Supprimer=this.lm.group({
      identifiant:[''],
      libelle:[''],
      region:['']
    });
  }
  Delete(f:FormGroup){
    if(this.service.exist(f.controls.identifiant.value,f.controls.libelle.value,f.controls.region.value))
    {return "produit supprimer";}
    else {return "produit introuvable";}
  }
  onVider(f:FormGroup){
    this.Supprimer.reset({identifiant:'', libelle:'',region:''});
}

}
