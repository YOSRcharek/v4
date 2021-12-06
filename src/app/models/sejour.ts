import { Image } from "../image";


export class Sejour {
    constructor(
        public identifiant?:string,
        public id?:string,
        public libelle?:string,
        public ville ?: string,
        public type?:string,
        public categorie?:string,
        public prix:number=0,
        public promotion?:boolean,
        public date_arrivee?:Date,
        public date_depart?:Date,
        public nombre_etoile?:number,
        public tableau_img?:Image[],
        public tableau_info?:string[],
        public typeCh ?:string[],
        public avis?:number,
        public servicePH?:string[],
        public service?:string[],
        public pic?:string,
        public pourcentage?:number
    ){}
}

