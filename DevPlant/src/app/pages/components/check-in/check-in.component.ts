import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : '',
    nacimiento : ''
  }

  constructor(private userService:UserService) {

   }

   ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null){
      alert('El nombre de usuario es requerido');
      return;
    }

    this.userService.registrarUsuario(this.user).subscribe(
      (data) => {
        console.log(data)
        alert('Usuario guardado con exito')
      },(error) => {
        console.log(error)
        alert('Usuario ya esta registrado')
      }
    )


  }



  //inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]

}





//inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]






