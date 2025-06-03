import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginController } from '../../controllers/login.controller';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  controller = new LoginController();

  constructor(private router: Router) {}

  ingresar() {
    this.controller.login();
    this.router.navigate(['/dashboard']);
  }
}