import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  
//funciones del formulario
form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    
   }

  ngOnInit(): void {
    this.CreateForm();
  }
  CreateForm(){
    this.form = this.fb.group({

      eMail:[" ",[Validators.required, Validators.email,Validators.minLength(10)]],
      password:[" ",[Validators.required,Validators.minLength(8)]],
      name:[" ",[Validators.required,Validators.minLength(2)]],
      lastname:[" ",[Validators.required,Validators.minLength(2)]],
      dni:[" ",[Validators.required,Validators.minLength(2)]],
      birthday:[" ",[Validators.required,Validators.minLength(2)]],
      phone:[" ",[Validators.required,Validators.minLength(2)]],
      city:[" ",[Validators.required,Validators.minLength(2)]],
      province:[" ",[Validators.required,Validators.minLength(2)]],


    });
    
  //inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]

}
logIn(){
 

}

//inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]

get GetForm(){

  return this.form.controls;
}
}




