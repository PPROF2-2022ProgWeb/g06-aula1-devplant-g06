import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session: boolean=false; //genero una variable para no mostrar todos los botones del nav, accedo desde el navbar.component.html

  constructor() { }

  ngOnInit(): void {
  }

}
