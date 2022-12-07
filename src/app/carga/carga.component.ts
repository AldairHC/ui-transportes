import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carga } from '../models/carga';
import { CargaService } from '../services/carga.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent {
  cargas: Carga[] = [];

  constructor(
    private cargaService: CargaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.listaCargas();
  }

  listaCargas(): void {
    this.cargaService.listaCargas().subscribe(
      data => {
        this.cargas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(idCarga: number) {
    this.cargaService.ElimnarCargas(idCarga).subscribe(
      data => {
        this.toastr.success('Platillo Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.listaCargas();
      },
      err => {
         this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.listaCargas();
      }
    );
  }
}
