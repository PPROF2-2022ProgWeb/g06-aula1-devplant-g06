import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


 form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder
  ){ }

  ngOnInit(): void {
   this.CreateForm();
  }
  
  CreateForm(){
    this.form = this.fb.group({

      username:[" ",[Validators.required, Validators.email,Validators.minLength(10)]],
      
      password:[" ",[Validators.required,Validators.minLength(8)]],

    });
  }

}
