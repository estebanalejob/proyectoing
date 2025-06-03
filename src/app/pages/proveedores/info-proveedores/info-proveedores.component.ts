import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-proveedores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-proveedores.component.html',
  styleUrls: ['./info-proveedores.component.css']
})
export class InfoProveedoresComponent {}
