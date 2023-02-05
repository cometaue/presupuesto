import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PresupuestoService } from '../../../services/presupuesto.service';
import { Comprobar } from '../../../validators/validators';
import { Producto } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styles: [
    `
      button {
        width: 100%;
        background-color: #8a2be1;
        color: white;
      }
      button:hover {
        background-color: #c94b4b;
        transition: background-color 0.2s ease-in-out;
        color: white;
      }
      label {
        font-weight: 600;
        font-size: 1.2rem;
        margin-top: 0.75em;
        margin-bottom: 0.5em;
      }
      hr {
        height: 6px;
      }
      h4 {
        font-weight: 620;
        font-size: 1.5rem;
      }
    `,
  ],
})
export class IngresarGastoComponent implements OnInit {
  public miFormulario!: FormGroup;
  public producto!: Producto;

  constructor(private fb: FormBuilder, private _ps: PresupuestoService) {}

  ngOnInit(): void {
    this,
      (this.miFormulario = this.fb.group({
        consumo: [, [Validators.required, Validators.minLength(3)], []],
        cantidad: [
          ,
          [Validators.required, Validators.min(0), Comprobar(this._ps)],
          [],
        ],
      }));

    this.producto = { consumo: '', cantidad: 0 };
  }

  agregarGasto() {
    const gasto = parseFloat(this.miFormulario.get('cantidad')?.value);
    this.producto = {
      consumo: this.miFormulario.get('consumo')?.value,
      cantidad: gasto,
    };

    this._ps.agregarGasto(this.producto);
    this.miFormulario.reset();
  }
}
