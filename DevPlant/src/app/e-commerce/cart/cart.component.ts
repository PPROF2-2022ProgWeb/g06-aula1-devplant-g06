import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/pages/components/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productos: Producto[] = [];




  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

    this.cargarProductos();


  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      error => {
        console.log (error);
      }
    );
  }
}
