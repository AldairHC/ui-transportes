import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Carga } from 'src/app/models/carga';
import { CargaService } from 'src/app/services/carga.service';


@Component({
  selector: 'app-registrar-carga',
  templateUrl: './registrar-carga.component.html',
  styleUrls: ['./registrar-carga.component.css']
})
export class RegistrarCargaComponent {
  codigo = '';
  peso = '';
  caracteristicas = '';

  constructor(
    private cargaService: CargaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  crearCarga(): void {
    const cargas = new Carga(this.codigo, this.peso, this.caracteristicas);
    this.cargaService.GuardarCargas(cargas).subscribe(
      data => {
        this.toastr.success('Carga Agregado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/cargas']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
}
