import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { SejourService } from '../services/sejour.service';
@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {

  UserForm: FormGroup= new FormGroup({});
  constructor( private fb:FormBuilder) { }
  onSubmitForm(){
    console.log(this.UserForm.value);
    console.log(this.UserForm.value['Email']);
    console.log(this.UserForm.get('Passeword')?.value);
   }
   onResetForm(){
    this.UserForm.get('Email')?.setValue('');
    this.UserForm.get('Passeword')?.setValue('');
   
   }
   get reference(){
    return this.UserForm.controls['Email'];
  }
  get lib(){
    return this.UserForm.controls['Passeword'];
  }
  isValidEmail():boolean{
    return this.UserForm.controls['Email'].errors?.pattern &&
    this.UserForm.controls['Email'].dirty;
    }
  isValidPattern():boolean{
    return this.UserForm.controls['Passeword'].errors?.pattern &&
    this.UserForm.controls['Passeword'].dirty;
    }
    
  ngOnInit(): void {
    this.UserForm.get('nouveau')?.setValue(true);
    this.UserForm = this.fb.group({
      Email:[0,Validators.required],
      Password: ['',Validators.required, Validators.pattern('[A-Z][a-zA-Z]+')],
      })
  }
  
}



