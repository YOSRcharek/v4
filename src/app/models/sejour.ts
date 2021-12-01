

export class Sejour {
    constructor(
        public identifiant:string='',
        public id:string="NULL",
        public libelle:string='',
        public ville : string='',
        public type:string='',
        public categorie:string='',
        public prix:number=0,
        public promotion:boolean=false,
        public date_arrivee:Date=new Date,
        public date_depart:Date=new Date,
        public nombre_etoile:number=0,
        public tableau_img:string[]=[],
        public tableau_info:string[]=[],
        public typeCh :string[]=[],
        public avis:number=0,
        public servicePH:string[]=[],
        public service:string[]=[],

        
    ){}
}

