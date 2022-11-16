import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

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


      })

  }

volver(): void {

  this.router.navigate(['/lista']);

}


}
