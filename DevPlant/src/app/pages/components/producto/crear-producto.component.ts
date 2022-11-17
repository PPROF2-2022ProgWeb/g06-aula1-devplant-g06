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
  id: any;


  constructor(private productoService: ProductoService,
      private snack:MatSnackBar,
      private router: Router
    ) { }

  ngOnInit(): void {
  }



  onCreate(): void{
    const producto = new Producto(this.nombre, this.precio, this.id);
    this.productoService.save(producto).subscribe(
      (data) => {
        console.log(data)
        Swal.fire('Producto registrado', 'Producto registrado con exito','success');
        
      },(error) => {
        console.log(error)
        Swal.fire('Producto no registrado', 'Producto no registrado con exito (Precio tiene q ser mayor a 0) o ya existe ','error');
        ;
      }
    )
  }




}
