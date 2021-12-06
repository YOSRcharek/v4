import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../service/hotel.service';
import { Reservation } from '../reservation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css']
})
export class PayerComponent implements OnInit {
reservation:Reservation[]=[];
PayerForm:FormGroup;
  
  constructor( private hotelsService:HotelsService, private fb:FormBuilder) { }
  
  ngOnInit(): void {

     this.reservation=this.hotelsService.reserverHotel();
     this.PayerForm=this.fb.group({
      firstname :['',Validators.required],
      email:['',Validators.required],
      address :['',Validators.required],
      city:['',Validators.required],
      cardname :['',Validators.required],
      cardnumber:['',Validators.required],
      expmonth:['',Validators.required],
      expyear:['',Validators.required],
      cvv:['',Validators.required]
    });
    }
    get firstname(){
      return this.PayerForm.controls.firstname;
  }
  get email(){
    return this.PayerForm.controls.email;
} get address(){
  return this.PayerForm.controls.address;
} get city(){
  return this.PayerForm.controls.city;
} get cardname (){
  return this.PayerForm.controls.cardname ;
} get  cardnumber(){
  return this.PayerForm.controls. cardnumber;
} get expmonth(){
  return this.PayerForm.controls.expmonth;
}get expyear(){
  return this.PayerForm.controls.expyear;
}get cvv(){
  return this.PayerForm.controls.cvv;
}
}
