import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { AgregarProductoComponent } from './pages/productos/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './pages/productos/eliminar-producto/eliminar-producto.component';
import { VerProductosComponent } from './pages/productos/ver-productos/ver-productos.component';
import { InfoProveedoresComponent } from './pages/proveedores/info-proveedores/info-proveedores.component';
import { AgregarProveedorComponent } from './pages/proveedores/agregar-proveedor/agregar-proveedor.component';
import { EliminarProveedorComponent } from './pages/proveedores/eliminar-proveedor/eliminar-proveedor.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: 'clientes', pathMatch: 'full' },
      { path: 'clientes', component: ClientesComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'proveedores', component: ProveedoresComponent },
      { path: 'productos/agregar', component: AgregarProductoComponent },
      { path: 'productos/eliminar', component: EliminarProductoComponent },
      { path: 'productos/ver', component: VerProductosComponent },
      { path: 'proveedores/info', component: InfoProveedoresComponent },
      { path: 'proveedores/agregar', component: AgregarProveedorComponent },
      { path: 'proveedores/eliminar', component: EliminarProveedorComponent },
    ]
  }
];