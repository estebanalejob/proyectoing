import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Agrega esta línea

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- Agrega RouterModule aquí
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {}
