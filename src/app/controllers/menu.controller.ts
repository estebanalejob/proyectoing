import { Usuario } from '../models/usuario.model';

export class MenuController {
  usuario: Usuario;

  constructor(usuario: Usuario) {
    this.usuario = usuario;
  }
}