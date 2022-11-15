import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


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

  constructor(private userService:UserService, private snack:MatSnackBar) {

   }

   ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null){
      this.snack.open('El nombre de usuario es requerido!' , 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null){
      this.snack.open('La contraseña es requerida!' , 'Aceptar', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }



    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data)
        Swal.fire('Usuario registrado', 'Usuario registrado con exito','success');
      },(error) => {
        console.log(error)
        Swal.fire('Usuario no registrado', 'Usuario no registrado con exito','error');
        ;
      }
    )


  }



  //inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]

}





//inhabilitamos el boton de ingresar hasta que esté validado el usuario y la contraseña en logIn component.html con [disabled]






