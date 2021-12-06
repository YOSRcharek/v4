import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  Ajouter!:FormGroup;
  produit:Sejour=new Sejour();
  alert:string='';
  constructor(public lm:FormBuilder,public service:HotelsService,) { }

  ngOnInit(): void {
    this.Ajouter=this.lm.group({
      identifiant:[''],
      libelle:[''],
      typeH:false,
      typeM:false,
      promo:false,
      prix:0,
      pourcentage:0,
      nombre_etoile:0,
      tableau_img:[''],
      ville:[''],
      region:['']
    });
  }
  onAjouter(f:FormGroup){
    if(this.service.addNewhotel(this.produit)) 
        this.alert = "Employé ajouté" ;
    else
        this.alert = "L'employé existe déjà";
  }
  onVider(f:FormGroup){
    this.Ajouter.reset({identifiant:'', libelle:'',region:''});}
}
