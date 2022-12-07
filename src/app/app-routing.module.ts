import { FacturaComponent } from './factura/factura.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaComponent } from './carga/carga.component';
import { RegistrarCargaComponent } from './carga/registrar-carga/registrar-carga.component';

const routes: Routes = [
  {path: 'cargas', component: CargaComponent},
  {path: 'pedidos', component: PedidoComponent},
  {path: 'facturas', component: FacturaComponent},
  {path: 'cargas/guardar', component: RegistrarCargaComponent},
  {path: 'cargas/detalle/:cod_platillo', component: CargaComponent},
  {path: 'cargas/editar/:cod_platillo', component: CargaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
