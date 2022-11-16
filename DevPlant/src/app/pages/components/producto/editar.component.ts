import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  producto!: Producto;

  constructor(

    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router


  ) { }




  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      error => {

        Swal.fire('Fail', 'Error','error');
        this.router.navigate(['/admin']);

      }
    )
  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.update(id, this.producto).subscribe(
      (data) => {
        console.log(data)
        Swal.fire('Producto editado', 'Producto editado con exito','success');
        this.router.navigate(['/lista']);
      },(error) => {
        console.log(error)
        Swal.fire('Producto no editado', 'Producto no editado con exito (Precio tiene q ser mayor a 0) o ya existe ','error');
        ;
      }
    )

  }



}
