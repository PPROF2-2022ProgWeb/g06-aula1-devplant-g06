import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from 'src/app/services/producto.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {


  nombre = '';
  precio : any ;


  constructor(private productoService: ProductoService,
      private snack:MatSnackBar
    ) { }

  ngOnInit(): void {
  }



  onCreate(): void{
    const producto = new Producto(this.nombre, this.precio);
    this.productoService.save(producto).subscribe(
      (data) => {
        console.log(data)
        Swal.fire('Producto registrado', 'Producto registrado con exito','success');
      },(error) => {
        console.log(error)
        this.snack.open(error.error.mensaje , 'Aceptar', {
          duration : 3000,
        });
      }
    )
  }




}
