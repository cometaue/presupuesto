import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Nonumero } from 'src/app/validators/validators';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styles: [
    `
      h2 {
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
      }
    `,
  ],
})
export class PresupuestoComponent {
  presupuesto: FormControl;
  constructor(
    private router: Router,
    private _presupuestoService: PresupuestoService
  ) {
    this.presupuesto = new FormControl('', [
      Validators.required,
      Validators.min(1),
      Nonumero,
    ]);
  }
  salir() {
    if (this.presupuesto.errors) {
      return;
    }
    this._presupuestoService.presupuestoTotal = this.presupuesto.value;
    this._presupuestoService.presupuestoActual = this.presupuesto.value;
    this.router.navigate(['/gastos']);
  }
}
