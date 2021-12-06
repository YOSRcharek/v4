import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sejour } from '../models/sejour';
import { HotelsService } from '../service/hotel.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  Search!: FormGroup;
  nom!:string;
  hotel:Sejour[]=[];
  alert:string='hotel introbvale';
  constructor(private service:HotelsService,private f:FormBuilder) { }
 
  ngOnInit(): void {
    this.Search=this.f.group({
      libelle:[''],
    });
  }
  onChercher(ch:string){
    this.hotel=this.service.recherche(ch);
  
  }
  promo(n:number,p:number){
    return (n-p)/100;
  }
  etoile(n:number)
  {let NBetoile:string[]=[];
    for (let i=0;i<n;i++) {
    NBetoile.push('');
  }
  return NBetoile;
}


}
