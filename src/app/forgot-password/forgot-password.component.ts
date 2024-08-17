import { Component } from '@angular/core';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotpasswordComponent {

  password:string='';
  userDetails={
    fullName:'',
    email:'',
    address:'',
    moblie:'',
    age:null,
    gender:'',
  };

  mouseenter(){
    console.log('from template forgot password class');

  }

}