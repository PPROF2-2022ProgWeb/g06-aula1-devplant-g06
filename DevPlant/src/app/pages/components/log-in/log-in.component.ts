import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

//funciones del formulario
 form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder){
      
     }

  ngOnInit(): void {
   this.CreateForm();
  }
  
  CreateForm(){
    this.form = this.fb.group({

      username:[" ",[Validators.required, Validators.email,Validators.minLength(10)]],
      
      password:[" ",[Validators.required,Validators.minLength(8)]],

    });
  }
  logIn(){
   

  }

  //inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]

  get GetForm(){

    return this.form.controls;
  }
}
