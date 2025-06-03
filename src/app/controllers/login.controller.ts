import { Usuario } from '../models/usuario.model';

export class LoginController {
  usuario: Usuario = { nombre: 'Administrador', rol: 'admin' };

  login(): Usuario {
    // Aquí podrías validar usuario/contraseña
    return this.usuario;
  }
}
