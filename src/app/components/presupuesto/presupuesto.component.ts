import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Nonumero } from 'src/app/validators/validators';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styles: [
    `
      #aceptar {
        padding: 10px 20px;
        border: none;
        border-radius: 50px;
        background-color: #8a2be2;

        cursor: pointer;
      }

      #aceptar:hover {
        background-color: #c94b4b;
        transition: background-color 0.2s ease-in-out;
      }

      h2 {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
      }

      .mssgError {
        font-size: 1.2em;
      }
    `,
  ],
})
export class PresupuestoComponent {
  presupuesto: FormControl;
  constructor(
    private fb: FormBuilder,
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
    this._presupuestoService.PresupuestoTotal = this.presupuesto.value;
    this.router.navigate(['/gastos']);
  }
}
