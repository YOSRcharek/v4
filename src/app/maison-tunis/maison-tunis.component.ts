import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sejour } from '../models/sejour';
import { Image } from '../image';
import { MService } from '../service/m.service';
@Component({
  selector: 'app-maison-tunis',
  templateUrl: './maison-tunis.component.html',
  styleUrls: ['./maison-tunis.component.css']
})
export class MaisonTunisComponent implements OnInit {
  @Input() img :Image= new Image();
  MaisonTunis: Sejour;
  
   
  constructor(  private activatedRoute:ActivatedRoute, private service:MService) { }
  
  ngOnInit(): void {
   let libelle = this.activatedRoute.snapshot.params['libelle'];
     this.MaisonTunis=this.service.getMaisonByLib(libelle) ;   }

  

}
