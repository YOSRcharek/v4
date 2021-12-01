import { Injectable } from '@angular/core';
import { Sejour } from '../models/sejour';
@Injectable({
  providedIn: 'root'
})
export class MService {

  constructor() { }
  
  MTunis:Sejour[]=[
    new Sejour('MB21','','Dar Ben Gasem','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/dar ben gasem1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
    new Sejour('MB21','','Dar Kenza ','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/dar kenza 1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
    new Sejour('MB21','','Dar Marsa Cubes','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/dar marsa cubes1.jpg','assets/dar marsa cubes1.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
    new Sejour('MB21','','Dar El Molk','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/dar el molk1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
    new Sejour('MB21','','Dar Salima','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/dar salima 1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
    new Sejour('MB21','','Dar Ya','Tunis Ville - Tunisie','Maison d hôte','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
    ['assets/dar ya 1.jpg','assets/La Maison Blanche_2.jpg','assets/La Maison Blanche_3.jpg','assets/La Maison Blanche_4.jpg'],
    ['x','y']),
   
  ]
 MHammamet:Sejour[]=[
       new Sejour('SPS21','','Saphir Palace & Spa','Hammamet - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
       ['assets/Saphir Palace & Spa_1.jpg','assets/Saphir Palace & Spa_2.jpg','assets/Saphir Palace & Spa_3.jpg','assets/Saphir Palace & Spa_4.jpg','assets/Saphir Palace & Spa_5.jpg',
       'assets/Saphir Palace & Spa_6.jpg','assets/Saphir Palace & Spa_7.jpg','assets/Saphir Palace & Spa_8.jpg','assets/Saphir Palace & Spa_9.jpg',],
       ['x','y'])
      
   ]
   MAinDraham:Sejour[]=[
     new Sejour('DIEA21','','Dar Ismail Nour El Ain','Ain Draham - Tunisie','hotel','d  d',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
     ['assets/Dar Ismail Nour El Ain_1.jpg','assets/Dar Ismail Nour El Ain_2.jpg','assets/Dar Ismail Nour El Ain_3.jpg',
     'assets/Dar Ismail Nour El Ain_4.jpg','assets/Dar Ismail Nour El Ain_5.jpg','assets/Dar Ismail Nour El Ain_6.jpg','assets/Dar Ismail Nour El Ain_7.jpg'],
     ['x','y'])

    ]

 MTozeur:Sejour[]=[
   new Sejour('ATR21','','Anantara Tozeur Resort','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
   ['assets/Anantara Tozeur Resort_1.jpg','assets/Anantara Tozeur Resort_2.jpg','assets/Anantara Tozeur Resort_3.jpg','assets/Anantara Tozeur Resort_4.jpg','assets/Anantara Tozeur Resort_5.jpg',
   'assets/Anantara Tozeur Resort_6.jpg','assets/Anantara Tozeur Resort_7.jpg','assets/Anantara Tozeur Resort_8.jpg',],
   ['x','y'])
   ]

 MDjerba:Sejour[]=[
  new Sejour('HPTSD21','','Hasdrubal Prestige Thalassa & Spa Djerba','Tozeur - Tunisie','hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),5,
  ['assets/Hasdrubal Prestige Thalassa & Spa Djerba_1.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_3.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_4.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_5.jpg',
  'assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_7.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_8.jpg'],
  ['x','y'])
 ]


 mtunis(){  
  return this.MTunis;
  }

  mhammamet(){
    return this.MHammamet;
  }

  mAindraham(){
    return this.MAinDraham;
  }

  mtozeur(){
    return this.MTozeur;
  }

  mDjerba(){
    return this.MDjerba;
  }





}
