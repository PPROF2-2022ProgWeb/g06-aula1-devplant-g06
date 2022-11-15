import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/pages/components/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

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

  borrar( id : number) {
    alert("Borrar el " + id);
  }
}
