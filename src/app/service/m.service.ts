import { Injectable } from '@angular/core';
import { Image } from '../image';
import { Sejour } from '../models/sejour';
@Injectable({
  providedIn: 'root'
})
export class MService {


   private MTunis:Sejour[]=[
    new Sejour('MB21','','Dar Ben Gasem','Tunis Ville - Tunisie','Maison d hôte','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar ben gasem1.jpg','assets/dar ben gasem2.jpg ','assets/dar ben gasem3.jpg ','assets/dar ben gasem4.jpg')] ,
    ['x','y'],['Chambre Dar Ben Gacem'],14,[''] ,[''] ,'assets/dar ben gasem1.jpg'),
    new Sejour('MB631','','Dar Kenza ','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar kenza 1.jpg','assets/dar kenza 2.jpg','assets/dar kenza 3.jpg','assets/dar kenza 4.jpg')],
    ['x','y'],['Chambre Medina','Chambre Zitouna'],15,[''],[''],'assets/dar kenza 1.jpg'),
    new Sejour('MB41','','Dar Marsa Cubes','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar marsa cubes1.jpg','assets/dar marsa cubes2.jpg','assets/dar marsa cubes3.jpg','assets/dar marsa cubes4.jpg')],
    ['x','y'],['Chambre Musc Dar Marsa cubes','Chambre Fella Dar Marsa cubes', 'Suite Jasmin Dar Marsa cubes',' Suite Ambre Dar Marsa cubes', 'Suite Fatma Dar Marsa cubes']
    ,18,[''],[''],'assets/dar marsa cubes1.jpg'),
    new Sejour('MB51','','Dar El Molk','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar el molk1.jpg','assets/dar el molk2.jpg','assets/dar el molk3.jpg','assets/dar el molk4.jpg')],
    ['x','y'],['Chambre / Douche','Chambre / Baignoire'],6,[''],[''],'assets/dar el molk1.jpg' ),
    new Sejour('MB61','','Dar Salima','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar salima 1.jpg','assets/dar salima 2.jpg','assets/dar salima 3.jpg','assets/dar salima 4.jpg')],
    ['x','y'],['Chambre Dar Salima vue piscine','Chambre Dar Salima salle de bain int','Chambre Dar Salima salle de bain ext'],14,[''],[''],'assets/dar salima 1.jpg'),
    new Sejour('MB71','','Dar Ya','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar ya 1.jpg','assets/dar ya 2.jpg','assets/dar ya 3.jpg','assets/dar ya 4.jpg')]
    ,['x','y'], ['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadruple'],12,[''],[''],'assets/dar ya 1.jpg')];

 

  public mtunis(){  
  return this.MTunis;
  }

  public getMaisonByLib(libelle:string){
    return this.MTunis.find(l=>l.libelle==libelle);
  } 
  

 
  // private mhammamet(){
  //   return this.MHammamet;
  // }

  // private mAindraham(){
  //   return this.MAinDraham;
  // }

  // private mtozeur(){
  //   return this.MTozeur;
  // }

  // private mDjerba(){
  //   return this.MDjerba;
  // }

  constructor() { }



}
