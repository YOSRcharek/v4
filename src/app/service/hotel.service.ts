import { Injectable } from '@angular/core';
import { Image } from '../image';
import { Sejour } from '../models/sejour';
import { Reservation } from '../reservation';



@Injectable({
  providedIn: 'root'
})
export class HotelsService {
    
   private HotelsTunis:Sejour[]=[
   
 
    
    new Sejour('BDLC21','','Les Berges Du Lac Concorde','Tunis Ville - Tunisie','Hotel','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
   [ new Image('assets/Les Berges Du Lac Concorde_1.jpg','assets/Les Berges Du Lac Concorde_2.jpg','assets/Les Berges Du Lac Concorde_3.jpg','assets/Les Berges Du Lac Concorde_4.jpg')],
    ['Climatisation','Séche-cheveux','Téléphone','Bar','Restaurant','Salle de réunion' ,'Télévision'],
    ['Chambre Double','Chambre Single','Suite Junior Double','Suite Présidentielle Double','Suite Junior Single *','Suite Single Présidentielle *'],15,
    ['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Les Berges Du Lac Concorde_1.jpg'),


    new Sejour('DEHS21','','Dar El Jeld Hôtel & Spa','Tunis Ville  - Tunisie','Hotel','',80,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/Dar El Jeld Hôtel & Spa_1.jpg','assets/Dar El Jeld Hôtel & Spa_2.jpg','assets/Dar El Jeld Hôtel & Spa_3.jpg','assets/Dar El Jeld Hôtel & Spa_4.jpg')],
    ['x','y'],['Suite junior Dar El Jeld','Suite Exécutive Dar El Jeld','Suite de Luxe Dar El Jeld'],16,[],[],'assets/Dar El Jeld Hôtel & Spa_1.jpg'      ),




    new Sejour('LT21','','Laico Tunis','Tunis Ville - Tunisie','Hotel','',70,false,new Date(22,11,2021),new Date(22,11,2021),5,
   [ new Image('assets/Laico Tunis_1.jpg','assets/Laico Tunis_2.jpg','assets/Laico Tunis_3.jpg','assets/Laico Tunis_4.jpg')],
    ['x','y'],['Chambre Deluxe (30 m²) ','Single Chambre Deluxe (30 m²) ','Double Chambre Exécutive (40 m²)', 'Single  Chambre Exécutive (40 m²) ','Double  Suite Présidentielle ( 340 m²)'],16,[],[],'assets/Laico Tunis_1.jpg'),
    
    
    
    new Sejour('MF21','','El Mouradi Africa','Tunis Ville - Tunisie','Hotel','',60,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/El Mouradi Africa_1.jpg','assets/El Mouradi Africa_2.jpg','assets/El Mouradi Africa_3.jpg','assets/El Mouradi Africa_4.jpg')],
    ['x','y'], ['Chambre Double','Chambre Single'],16,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png'] , ['climatiseur','café','Ascenceur','Restaurant'],'assets/El Mouradi Africa_1.jpg' ),
    
    
    
    new Sejour('AHS21','','Adam Hotel Suites','Tunis Ville - Tunisie','Hotel','',40,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/Adam Hotel Suites_1.jpg','assets/Adam Hotel Suites_2.jpg','assets/Adam Hotel Suites_3.jpg','assets/Adam Hotel Suites_4.jpg'  )],
    ['x','y'] , ['Avani Two Bedroom Lake View Suite','Avani Three Bedroom Lake View Suite','Avani Three Bedroom Lake View Pool Suite','Avani Superior Room',' Avani Room','Avani One Bedroom Suite', 'Avani One Bedroom Lake View Suite','Avani Four Bedroom Lake View Suite-Loft']
    ,19,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant']  ,'assets/Adam Hotel Suites_1.jpg'   
  
    ),
    new Sejour('DM21','','Dar El Medina','Tunis Ville - Tunisie','Hotel','',50,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/Dar El Medina_1.jpg','assets/Dar El Medina_2.jpg','assets/Dar El Medina_3.jpg','assets/Dar El Medina_4.jpg')], ['x','y'],
     [' Chambre Double','Chambre Single',' Appart Double',' Appart Single',  'Appart Triple'] ,12,[],[],'assets/Dar El Medina_1.jpg' )

 
  ];

private promoHotelsTunis:Sejour[]=[
  
  new Sejour('BDLC21','','Les Berges Du Lac Concorde','Tunis Ville - Tunisie','Hotel','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/Les Berges Du Lac ConcordePromo_1.jpg','assets/Les Berges Du Lac Concorde_2.jpg','assets/Les Berges Du Lac Concorde_3.jpg','assets/Les Berges Du Lac Concorde_4.jpg')],
  ['Climatisation','Séche-cheveux','Téléphone','Bar','Restaurant','Salle de réunion' ,'Télévision'],['Chambre Double','Chambre Single','Suite Junior Double','Suite Présidentielle Double','Suite Junior Single *','Suite Single Présidentielle *'],15,['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Les Berges Du Lac ConcordePromo_1.jpg')
 , 
 new Sejour('LT21','','Laico Tunis','Tunis Ville - Tunisie','Hotel','',70,false,new Date(22,11,2021),new Date(22,11,2021),5,
[ new Image('assets/Laico TunisPromo_1.jpg','assets/Laico Tunis_2.jpg','assets/Laico Tunis_3.jpg','assets/Laico Tunis_4.jpg')],['x','y'],['Chambre Deluxe (30 m²) ','Single Chambre Deluxe (30 m²) ','Double Chambre Exécutive (40 m²)', 'Single  Chambre Exécutive (40 m²) ','Double  Suite Présidentielle ( 340 m²)'],16,[],[],'assets/Laico TunisPromo_1.jpg'  ),






];


  HotelsHammamet:Sejour[]=[
       new Sejour('SPS21','','Saphir Palace & Spa','Hammamet - Tunisie','Hotel','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
       [new Image('assets/Saphir Palace & Spa_1.jpg','assets/Saphir Palace & Spa_2.jpg','assets/Saphir Palace & Spa_3.jpg','assets/Saphir Palace & Spa_4.jpg')],['x','y'],['Chambre Double','Chambre Single','Chambre Triple'],
       15,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Saphir Palace & Spa_1.jpg' ),
      
      
      
       new Sejour('AT21','','Alhambra Thalasso','Hammamet - Tunisie','Hotel','',90,false,new Date(22,11,2021),new Date(22,11,2021),5,
      [ new Image('assets/Alhambra Thalasso_1.jpg','assets/Alhambra Thalasso_2.jpg','assets/Alhambra Thalasso_3.jpg','assets/Alhambra Thalasso_4.jpg')],
       ['x','y'],['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadripole'],16,['assets/climatiseur.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','Ascenceur','Restaurant','Bar','Piscine'],'assets/Alhambra Thalasso_1.jpg'),
       
       
       new Sejour('RH122','','Le Royal Hammamet ','Hammamet - Tunisie','Hotel','',120,false,new Date(22,11,2021),new Date(22,11,2021),5,
       [new Image('assets/Le Royal Hammamet_1.jpg','assets/Le Royal Hammamet_2.jpg','assets/Le Royal Hammamet_3.jpg','assets/Le Royal Hammamet_4.jpg')],
       ['x','y'],['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadripole'],14,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Le Royal Hammamet_1.jpg'),



        new Sejour('MB122','','Les Orangers Garden Villas & Bungalows ','Hammamet - Tunisie','Hotel','',400,false,new Date(22,11,2021),new Date(22,11,2021),5,
        [new Image('assets/oranges1.jpg','assets/oranges2.jpg','assets/oranges3.jpg','assets/oranges4.jpg')],['x','y'],
        ['Chambre Single Premium 2','Chambre Single Premium 1','Bungalow Junior','Bungalow Senior','Double Premium 2 Les Orangers Garden','Double Premium 1 Les Orangers Garden','Double Deluxe 2 Les Orangers Garden','Double Deluxe 1 Les Orangers Garden','Triple Deluxe 1 (3 AD) OG' ,'Triple deluxe 1 (2Ad+1Enf -6ans)' ,'Triple Premium 1 (3 AD) OG','Triple Premium 1 (2Ad+1Enf -6ans)','Suite Familiale ( 2AD+2enf -6ans ) OG']
        ,14,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/oranges1.jpg'),
       
       
        new Sejour('MB122','','The Sindbad Hammamet  ','Hammamet - Tunisie','Hotel','',200,false,new Date(22,11,2021),new Date(22,11,2021),5, 
        [new Image('assets/sindbade1.jpg ','assets/sindbade2.jpg','assets/sindbade3.jpg','assets/sindbade4.jpg')],['x','y'],['Chambre Double','Chambre Single','Chambre Triple'],15,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/sindbade1.jpg '),
       
       
       
       new Sejour('MB122','','La Badira','Hammamet - Tunisie','Hotel','',250,false,new Date(22,11,2021),new Date(22,11,2021),5, 
       [new Image('assets/badira1.jpg','assets/badira2jpg.jpg','assets/badira3.jpg','assets/badira4.jpg')],['x','y'],['Suite Junior Fell vue mer (45m2)','Suite Junior Single Fell vue mer (45m2)',' Suite Junior Single Fell SUP avec vue mer et piscine(45m2)',' Suite Junior Fell SUP avec vue mer et piscine(45m2)',' Suite Junior Yasmine vue mer partielle(45m2)','Suite Junior Single Yasmine vue mer partielle(45m2)'] 
       ,18, ['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/badira1.jpg' ),
       
   ]
   private promoHotelsHammamet:Sejour[]=[
    new Sejour('AT21','','Alhambra Thalasso','Hammamet - Tunisie','Hotel','',90,false,new Date(22,11,2021),new Date(22,11,2021),5,
   [ new Image('assets/Alhambra Thalasso promo.PNG','assets/Alhambra Thalasso_2.jpg','assets/Alhambra Thalasso_3.jpg','assets/Alhambra Thalasso_4.jpg')],
    ['x','y'],['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadripole'],16,['assets/climatiseur.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','Ascenceur','Restaurant','Bar','Piscine'],
    'assets/Alhambra Thalasso promo.PNG'),
    
    new Sejour('RH122','','Le Royal Hammamet ','Hammamet - Tunisie','Hotel','',120,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/Le Royal Hammamet_1.jpg','assets/Le Royal Hammamet_2.jpg','assets/Le Royal Hammamet_3.jpg','assets/Le Royal Hammamet_4.jpg')],
    ['x','y'],['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadripole'],14,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Le Royal Hammamet_1 promo.jpg')


   ];
   HotelsAinDraham:Sejour[]=[
     new Sejour('DIEA21','','Dar Ismail Nour El Ain','Ain Draham - Tunisie','Hotel','d  d',75,false,new Date(22,11,2021),new Date(22,11,2021),4,
    [ new Image('assets/Dar Ismail Nour El Ain_1.jpg','assets/Dar Ismail Nour El Ain_2.jpg','assets/Dar Ismail Nour El Ain_3.jpg','assets/Dar Ismail Nour El Ain_4.jpg' )],['x','y'],['Chambre Double','Chambre Single','Chambre Triple'],13,['assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['Ascenceur','Restaurant','Bar','Piscine'],'assets/Dar Ismail Nour El Ain_1.jpg'),
     
     
     new Sejour('EMHB21','','El Mouradi Hammam Bourguiba','Ain Draham - Tunisie','Hotel','d  d',150,false,new Date(22,11,2021),new Date(22,11,2021),4,
     [ new Image('assets/El Mouradi Hammam Bourguiba_1.jpg','assets/El Mouradi Hammam Bourguiba_2.jpg','assets/El Mouradi Hammam Bourguiba_3.jpg','assets/El Mouradi Hammam Bourguiba_4.jpg')],
     ['x','y'] ,['Chambre Double','Chambre Single','Chambre Triple', 'Chambre Quadruple','Chambre économique','Chambre Triple Non remboursable','Chambre Single Non remboursable','Chambre Double Non remboursable','Chambre Quadruple Non Remboursable'],
     14, ['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/El Mouradi Hammam Bourguiba_1.jpg' )
    ]
  
 HotelsTozeur:Sejour[]=[
   new Sejour('ATR21','','Anantara Tozeur Resort','Tozeur - Tunisie','Hotel','',300,false,new Date(22,11,2021),new Date(22,11,2021),5,
   [new Image('assets/Anantara Tozeur Resort_1.jpg','assets/Anantara Tozeur Resort_2.jpg','assets/Anantara Tozeur Resort_3.jpg','assets/Anantara Tozeur Resort_4.jpg')],
   ['x','y'] ,['Deluxe Sahara View Room Single','Deluxe Sahara View Room Double','One Bedroom Villa Single','One Bedroom Villa Double','One Bedroom Pool Villa Single','One Bedroom Pool Villa Double','Two Bedroom Pool Villa Double Anantara','Deluxe Sahara 3Ad Anantara'],19,
   ['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
   ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Anantara Tozeur Resort_1.jpg'),


   new Sejour('PBPT21','','Palm Beach Palace Tozeur','Tozeur - Tunisie','Hotel','',60,false,new Date(22,11,2021),new Date(22,11,2021),5,
   [new Image('assets/Palm Beach Palace Tozeur_1.jpg','assets/Palm Beach Palace Tozeur_2.jpg','assets/Palm Beach Palace Tozeur_3.jpg','assets/Palm Beach Palace Tozeur_4.jpg')],
   ['x','y'],['Chambre Double',' Chambre Single','Chambre Triple'],12,['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Palm Beach Palace Tozeur_1.jpg'),
   
   
   new Sejour('PEE21','','La Palmeraiee','Tozeur - Tunisie','Hotel','',70,false,new Date(22,11,2021),new Date(22,11,2021),4,
   [new Image('assets/La Palmeraie_1.jpg','assets/La Palmeraie_2.jpg','assets/La Palmeraie_3.jpg','assets/La Palmeraie_4.jpg')],
   ['x','y'],['Chambre Double','Chambre Single','Chambre Triple'] ,13, ['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/La Palmeraie_1.jpg'   ),
  
   new Sejour('GYEA21','','Golden Yasmin Ras El Ain','Tozeur - Tunisie','Hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
  [ new Image('assets/Golden Yasmin Ras El Ain_1.jpg','assets/Golden Yasmin Ras El Ain_2.jpg','assets/Golden Yasmin Ras El Ain_3.jpg','assets/Golden Yasmin Ras El Ain_4.jpg')],
   ['x','y'],['Chambre Double','Chambre Single','Chambre Triple'] ,14, ['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Golden Yasmin Ras El Ain_1.jpg'),
  
   new Sejour('HT21','','Hafsi Tozeur','Tozeur - Tunisie','Hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),3,
   [new Image('assets/Hafsi Tozeur_1.jpg','assets/Hafsi Tozeur_2.jpg','assets/Hafsi Tozeur_3.jpg','assets/Hafsi Tozeur_4.jpg')],
   ['x','y'],['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadriole'] ,12, ['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Hafsi Tozeur_1.jpg'),
  
 ];
 private promoHotelsTozeur:Sejour[]=[
  new Sejour('PEE21','','La Palmeraiee','Tozeur - Tunisie','Hotel','',70,false,new Date(22,11,2021),new Date(22,11,2021),4,
  [new Image('assets/La Palmeraie_1.jpg','assets/La Palmeraie_2.jpg','assets/La Palmeraie_3.jpg','assets/La Palmeraie_4.jpg')],
  ['x','y'],['Chambre Double','Chambre Single','Chambre Triple'] ,13, ['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/La Palmeraie_1 promo.jpg'   ),
 
  new Sejour('GYEA21','','Golden Yasmin Ras El Ain','Tozeur - Tunisie','Hotel','',0,false,new Date(22,11,2021),new Date(22,11,2021),4,
 [ new Image('assets/Golden Yasmin Ras El Ain_1.jpg','assets/Golden Yasmin Ras El Ain_2.jpg','assets/Golden Yasmin Ras El Ain_3.jpg','assets/Golden Yasmin Ras El Ain_4.jpg')],
  ['x','y'],['Chambre Double','Chambre Single','Chambre Triple'] ,14, ['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Golden Yasmin Ras El Ain_1 Promo.jpg')
 


 ];
 HotelsDjerba:Sejour[]=[
  new Sejour('HPTSD21','','Hasdrubal Prestige Thalassa & Spa Djerba','Tozeur - Tunisie','Hotel','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/Hasdrubal Prestige Thalassa & Spa Djerba_1.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_3.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_4.jpg')],
  ['x','y'],['Suite Junior Fell vue mer (45m2)','Suite Junior Single Fell vue mer (45m2)',' Suite Junior Single Fell SUP avec vue mer et piscine(45m2)',' Suite Junior Fell SUP avec vue mer et piscine(45m2)',' Suite Junior Yasmine vue mer partielle(45m2)','Suite Junior Single Yasmine vue mer partielle(45m2)'] 
  ,19, ['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Hasdrubal Prestige Thalassa & Spa Djerba_1.jpg'          ),
  
  new Sejour('UDTS21','','Ulysse Djerba Thalasso & Spa','Tozeur - Tunisie','Hotel','',130,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/Ulysse Djerba Thalasso & Spa_1.jpg','assets/Ulysse Djerba Thalasso & Spa_2.jpg','assets/Ulysse Djerba Thalasso & Spa_3.jpg','assets/Ulysse Djerba Thalasso & Spa_4.jpg')],
  ['x','y'],['standard GV U' ,'standard SV U', 'standard Swimup UL'],17,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Ulysse Djerba Thalasso & Spa_1.jpg'   ),

  new Sejour('PBPD21','','Palm Beach Palace Djerba','Tozeur - Tunisie','Hotel','',80,false,new Date(22,11,2021),new Date(22,11,2021),5,
 [ new Image('assets/Palm Beach Palace Djerba_1.jpg','assets/Palm Beach Palace Djerba_2.jpg','assets/Palm Beach Palace Djerba_3.jpg','assets/Palm Beach Palace Djerba_4.jpg')],
  ['x','y'],['Chambre double ( Adult Only )'],15,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Palm Beach Palace Djerba_1.jpg'),

  new Sejour('RTM21','','Royal Thalassa Monastir','Tozeur - Tunisie','Hotel','',90,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image ('assets/Royal Thalassa Monastir_1.jpg','assets/Royal Thalassa Monastir_2.jpg','assets/Royal Thalassa Monastir_3.jpg' , 'assets/Royal Thalassa Monastir_4.jpg'  )],
  ['x','y'],['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadriole'],15,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Royal Thalassa Monastir_1.jpg'),

  new Sejour('IAD21','','Iliade Aquapark Djerba','Tozeur - Tunisie','Hotel','',75,false,new Date(22,11,2021),new Date(22,11,2021),4,
  [new Image('assets/Iliade Aquapark Djerba_1.jpg','assets/Iliade Aquapark Djerba_2.jpg','assets/Iliade Aquapark Djerba_3.jpg','assets/Iliade Aquapark Djerba_4.jpg')],
  ['x','y'],['Chambre Double','Chambre Triple'],13,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
  ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Iliade Aquapark Djerba_1.jpg'),

  new Sejour('VHBS21','','Vincci Helios Beach & Spa','Tozeur - Tunisie','Hotel','',110,false,new Date(22,11,2021),new Date(22,11,2021),4,
 [ new Image('assets/Vincci Helios Beach & Spa_1.jpg','assets/Vincci Helios Beach & Spa_2.jpg','assets/Vincci Helios Beach & Spa_3.jpg','assets/Vincci Helios Beach & Spa_4.jpg')],
  ['x','y'],['Chambre Double','Chambre Triple','Chambre familiale Menzel'],16,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
  ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Vincci Helios Beach & Spa_1.jpg')
 ]
 promoHotelsDjerba:Sejour[]=[
  new Sejour('HPTSD21','','Hasdrubal Prestige Thalassa & Spa Djerba','Tozeur - Tunisie','Hotel','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/Hasdrubal Prestige Thalassa & Spa Djerba_1.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_6.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_3.jpg','assets/Hasdrubal Prestige Thalassa & Spa Djerba_4.jpg')],
  ['x','y'],['Suite Junior Fell vue mer (45m2)','Suite Junior Single Fell vue mer (45m2)',' Suite Junior Single Fell SUP avec vue mer et piscine(45m2)',' Suite Junior Fell SUP avec vue mer et piscine(45m2)',' Suite Junior Yasmine vue mer partielle(45m2)','Suite Junior Single Yasmine vue mer partielle(45m2)'] 
  ,19, ['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/Hasdrubal Prestige Thalassa & Spa Djerba_1promo.jpg'),
  
  new Sejour('UDTS21','','Ulysse Djerba Thalasso & Spa','Tozeur - Tunisie','Hotel','',130,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/Ulysse Djerba Thalasso & Spa_1.jpg','assets/Ulysse Djerba Thalasso & Spa_2.jpg','assets/Ulysse Djerba Thalasso & Spa_3.jpg','assets/Ulysse Djerba Thalasso & Spa_4.jpg')],
  ['x','y'],['standard GV U' ,'standard SV U', 'standard Swimup UL'],17,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/Ulysse Djerba Thalasso & Spa_1 promo.jpg'),

 ];
  mTunis:Sejour[]=[
  new Sejour('MB21','','Dar Ben Gasem','Tunis Ville - Tunisie','Maison d hôte','',100,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/dar ben gasem1.jpg','assets/dar ben gasem2.jpg ','assets/dar ben gasem3.jpg ','assets/dar ben gasem4.jpg')] ,
  ['x','y'],['Chambre Dar Ben Gacem'],14,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/dar ben gasem1.jpg'),
  new Sejour('MB631','','Dar Kenza ','Tunis Ville - Tunisie','Maison d hôte','',50,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/dar kenza 1.jpg','assets/dar kenza 2.jpg','assets/dar kenza 3.jpg','assets/dar kenza 4.jpg')],
  ['x','y'],['Chambre Medina','Chambre Zitouna'],15,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine'],'assets/dar kenza 1.jpg'),
  new Sejour('MB41','','Dar Marsa Cubes','Tunis Ville - Tunisie','Maison d hôte','',70,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/dar marsa cubes1.jpg','assets/dar marsa cubes2.jpg','assets/dar marsa cubes3.jpg','assets/dar marsa cubes4.jpg')],
  ['x','y'],['Chambre Musc Dar Marsa cubes','Chambre Fella Dar Marsa cubes', 'Suite Jasmin Dar Marsa cubes',' Suite Ambre Dar Marsa cubes', 'Suite Fatma Dar Marsa cubes']
  ,18,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
  ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/dar marsa cubes1.jpg'),
  new Sejour('MB51','','Dar El Molk','Tunis Ville - Tunisie','Maison d hôte','',45,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/dar el molk1.jpg','assets/dar el molk2.jpg','assets/dar el molk3.jpg','assets/dar el molk4.jpg')],
  ['x','y'],['Chambre / Douche','Chambre / Baignoire'],6,['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/dar el molk1.jpg' ),
  new Sejour('MB61','','Dar Salima','Tunis Ville - Tunisie','Maison d hôte','',86,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/dar salima 1.jpg','assets/dar salima 2.jpg','assets/dar salima 3.jpg','assets/dar salima 4.jpg')],
  ['x','y'],['Chambre Dar Salima vue piscine','Chambre Dar Salima salle de bain int','Chambre Dar Salima salle de bain ext'],14,['assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png'],['café','Ascenceur','Restaurant','Bar','Piscine'],'assets/dar salima 1.jpg'),
  
  new Sejour('MB71','','Dar Ya','Tunis Ville - Tunisie','Maison d hôte','',70,false,new Date(22,11,2021),new Date(22,11,2021),5,
  [new Image('assets/dar ya 1.jpg','assets/dar ya 2.jpg','assets/dar ya 3.jpg','assets/dar ya 4.jpg')]
  ,['x','y'], ['Chambre Double','Chambre Single','Chambre Triple','Chambre Quadruple'],62,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
  ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/dar ya 1.jpg')];

  mHammamet:Sejour[]=[
   new Sejour('MB71','','Muses Hammamet','Hammamet - Tunisie','Maison d hôte','',90,false,new Date(22,11,2021),new Date(22,11,2021),5,
   [new Image('assets/muses hammamet1.jpg','assets/muses hammamet2.jpg','assets/muses hammamet3.jpg','assets/muses hammamet4.jpg')],['x','y']
    ,['Suite Junior Erato','Suite Junior Thalia','Chambre Double Clio','Chambre Double Calliope','Chambre Supérieur Euterpe'],150
    ,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
    ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/muses hammamet1.jpg'),
    new Sejour('MB71','','La maison du Golf','Hammamet - Tunisie','Maison d hôte','',120,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/maisonGolf 1.jpg','assets/maisonGolf 2.jpg','assets/maisonGolf 3.jpg','assets/maisonGolf 4.jpg')],['x','y']
     ,['Chambre Double La Maison Du Golf' ,'Suite Jacuzzi privé La Maison Du Golf','Suite Mini Appart La Maison Du Golf','Suite Junior La Maison du golf','Très grande suite La Maison du Golf'],150
     ,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
     ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/maisonGolf 1.jpg')
  ];
  mtozeur:Sejour[]=[
    new Sejour('MB71','','Muses Hammamet','Hammamet - Tunisie','Maison d hôte','',90,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/muses hammamet1.jpg','assets/muses hammamet2.jpg','assets/muses hammamet3.jpg','assets/muses hammamet4.jpg')],['x','y']
     ,['Suite Junior Erato','Suite Junior Thalia','Chambre Double Clio','Chambre Double Calliope','Chambre Supérieur Euterpe'],150
     ,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
     ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/muses hammamet1.jpg'),
     new Sejour('MB72','','La maison du Golf','Hammamet - Tunisie','Maison d hôte','',120,false,new Date(22,11,2021),new Date(22,11,2021),5,
     [new Image('assets/maisonGolf 1.jpg','assets/maisonGolf 2.jpg','assets/maisonGolf 3.jpg','assets/maisonGolf 4.jpg')],['x','y']
      ,['Chambre Double La Maison Du Golf' ,'Suite Jacuzzi privé La Maison Du Golf','Suite Mini Appart La Maison Du Golf','Suite Junior La Maison du golf','Très grande suite La Maison du Golf'],150
      ,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
      ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/maisonGolf 1.jpg')


  ];
  mdjerba:Sejour[]=[
    new Sejour('MB81','','Dar Michele','Djerba - Tunisie','Maison d hôte','',90,false,new Date(22,11,2021),new Date(22,11,2021),5,
    [new Image('assets/dar michele 1.jpg','assets/dar michele 2jpg.jpg','assets/dar michele 3.jpg','assets/dar michele 4.jpg')],['x','y']
     ,['Suite Anguiran','Suite Amandine'],15  ,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
     ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/dar michele 1.jpg'),

     new Sejour('MB82','','La maison du Golf','Djerba - Tunisie','Maison d hôte','',120,false,new Date(22,11,2021),new Date(22,11,2021),5,
     [new Image('assets/maisonGolf 1.jpg','assets/maisonGolf 2.jpg','assets/maisonGolf 3.jpg','assets/maisonGolf 4.jpg')],['x','y']
      ,['Chambre Double La Maison Du Golf' ,'Suite Jacuzzi privé La Maison Du Golf','Suite Mini Appart La Maison Du Golf','Suite Junior La Maison du golf','Très grande suite La Maison du Golf'],150
      ,['assets/climatiseur.png','assets/cafe.png','assets/ascenceur.png','assets/restaurant.png','assets/bar.png','assets/piscine.png','assets/garderieEnfant.png'],
      ['climatiseur','café','Ascenceur','Restaurant','Bar','Piscine','Garderie enfant'],'assets/maisonGolf 1.jpg')

  ];


 private reserver:Reservation[]=[
   new Reservation()
];

 Utilisateur:string[]=[
   'taboubi.oumaima','taboubi'
 ]
 public Mtunis(){  
  return this.mTunis;
  }
  
  public Mhammamet(){  
    return this.mHammamet;
    }
    public MTozeur(){  
      return this.mtozeur;
      }
      public MDjerba(){  
        return this.mdjerba;
        } 
  public getMaisonByLib(libelle:string){
    return this.mTunis.find(l=>l.libelle==libelle);
  } 
  public getMaisonByLibH(libelle:string){
    return this.mHammamet.find(l=>l.libelle==libelle);
  } 
  public getMaisonByLibD(libelle:string){
    return this.mdjerba.find(l=>l.libelle==libelle);
  } 
  public getMaisonByLibT(libelle:string){
    return this.mtozeur.find(l=>l.libelle==libelle);
  } 
 public ajouter(a:Reservation){
  this.reserver.push(a);
 }
 public reserverHotel(){
   return this.reserver;
 }
 public PromoHotelstunis(){  
  return this.promoHotelsTunis;
  }
  public PromoHotelsHammamet(){  
    return this.promoHotelsHammamet;
    }
    public PromoHotelsDjerba(){  
      return this.promoHotelsDjerba;   
     }
      public PromoHotelsTozeur(){  
        return this.promoHotelsTozeur;
        }
    public Hotelstunis(){  
    return this.HotelsTunis;
    }
    public getHotelById(){
      return this.HotelsTunis.filter(id=>id.identifiant==id.id);
    }
    public getHotelByLib(libelle:string){
       return this.HotelsTunis.find(l=>l.libelle==libelle);
       
    }
    
    Hotelshammamet(){
      return this.HotelsHammamet;
    }
    public getHotelByLibH(libelle:string){
      return this.HotelsHammamet.find(l=>l.libelle==libelle);
    }

    HotelAindraham(){
      return this.HotelsAinDraham;
    }
    
    public getHotelByLibHA(libelle:string) {
      return this.HotelsAinDraham.find(l=>l.libelle==libelle);
    }
    Hotelstozeur(){
      return this.HotelsTozeur;
    }
    
    public getHotelByLibT(libelle:string){
      return this.HotelsTozeur.find(l=>l.libelle==libelle);
    }

    HoteleDjerba(){
      return this.HotelsDjerba;
    }
    public getHotelByLibD(libelle:string){
      return this.HotelsDjerba.find(l=>l.libelle==libelle);
    }
    
  
   
    getuser(){
      return this.Utilisateur;
    }
    addNewhotel(hot:Sejour): boolean {
      let h:Sejour = Object.assign({}, hot);
      if (!this.existehotel(h.identifiant)) {    
        this.HotelsTunis.push(h);
        return true;
      }
      return false;
    }
    Upphotel(hot:Sejour): boolean {
      let h:Sejour = Object.assign({}, hot);
      let hotel:Sejour[]=[];
      if (this.existehotel(h.identifiant)) {  
        hotel=this.thisHotel(h.ville);
        for (let i = 0; i < hotel.length; i++) {
          if(hotel[i].identifiant==h.identifiant){
            hotel[i].promotion=h.promotion;
            hotel[i].pourcentage=h.pourcentage;
            hotel[i].prix=h.prix;
            hotel[i].libelle=h.libelle;
            return true;
          }
          
        }
      }
      {
        return false;}
    }
   public existehotel(x:string):boolean{
    return this.HotelsTunis.find(h=>h.identifiant==x) != undefined;
   }
   thisHotel(ch:string){
    if(ch=='Tunis')
    {return this.HotelsTunis;}
    else
    if(ch=='Hammamet')
    {return this.HotelsHammamet;}
    else
    if(ch=='Ain Draham')
    {return this.HotelsAinDraham;}
    else
    if(ch=='Tozeur')
    {return this.HotelsTozeur;}
    else
    if(ch=='Djerba')
    {return this.HotelsDjerba;}
    else
    return [];
   }
   recherche(ch:string){
    let tunis:Sejour[]=[];
    let hammamet:Sejour[]=[];
    let aindrahem:Sejour[]=[];
    let tozeur:Sejour[]=[];
    let djerba:Sejour[]=[];
    let hotel:Sejour[]=[];
       
       if(isNaN(Number(ch)))
       {
         tunis=this.HotelsTunis.filter(lib=>lib.ville==ch);
         for (let i=0;i<tunis.length;i++) {hotel.push(tunis[i]);}
         hammamet=this.HotelsHammamet.filter(lib=>lib.ville==ch);
         for (let i=0;i<hammamet.length;i++) {hotel.push(hammamet[i]);}
         aindrahem=this.HotelsAinDraham.filter(lib=>lib.ville==ch);
         for (let i=0;i<aindrahem.length;i++) {hotel.push(aindrahem[i]);}
         tozeur=this.HotelsTozeur.filter(lib=>lib.ville==ch);
         for (let i=0;i<tozeur.length;i++) {hotel.push(tozeur[i]);}
         djerba=this.HotelsDjerba.filter(lib=>lib.ville==ch); 
         for (let i=0;i<djerba.length;i++) {hotel.push(djerba[i]);}
            return hotel;
       }
       else 
          {
            tunis=this.HotelsTunis.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<tunis.length;i++) {hotel.push(tunis[i]);}
            hammamet=this.HotelsHammamet.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<hammamet.length;i++) {hotel.push(hammamet[i]);}
            aindrahem=this.HotelsAinDraham.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<aindrahem.length;i++) {hotel.push(aindrahem[i]);}
            tozeur=this.HotelsTozeur.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<tozeur.length;i++) {hotel.push(tozeur[i]);}
            djerba=this.HotelsDjerba.filter(lib=>lib.prix==Number(ch));
            for (let i=0;i<djerba.length;i++) {hotel.push(djerba[i]);}
            return hotel;
         }
     }
     exist(id:string,lib:string,c:string):Boolean{
      let hotel=this.thisHotel(c);
      for (let i = 0; i < hotel.length; i++){
        if(hotel[i].identifiant==id && hotel[i].libelle==lib)
        {hotel.splice(i,1);
        return true;}
      }

      return false;
    }
     constructor() { }
}
