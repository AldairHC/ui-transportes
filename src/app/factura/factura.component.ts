import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Factura } from '../models/factura';
import { FacturaService } from '../services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  facturas: Factura[] = [];

  constructor(
    private facturaService: FacturaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.listaFacturas();
  }

  listaFacturas(): void {
    this.facturaService.listaFacturas().subscribe(
      data => {
        this.facturas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(idFactura: number) {
    this.facturaService.ElimnarFacturas(idFactura).subscribe(
      data => {
        this.toastr.success('Platillo Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.listaFacturas();
      },
      err => {
         this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.listaFacturas();
      }
    );
  }
}
