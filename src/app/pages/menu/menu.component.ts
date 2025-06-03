import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuController } from '../../controllers/menu.controller';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  controller: MenuController;

  constructor() {
    const usuario: Usuario = { nombre: 'Administrador', rol: 'admin' };
    this.controller = new MenuController(usuario);
  }
}