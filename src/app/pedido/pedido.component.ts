import { PedidoService } from './../services/pedido.service';
import { Pedidos } from './../models/pedidos';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  pedido: Pedidos[] = [];

  constructor(
    private pedidoService: PedidoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.listaPedidos();
  }

  listaPedidos(): void {
    this.pedidoService.listaPedidos().subscribe(
      data => {
        this.pedido = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
