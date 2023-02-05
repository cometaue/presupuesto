import { Component, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Producto } from '../../../interfaces/producto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styles: [
    `
      h4 {
        font-weight: 620;
        font-size: 1.5rem;
      }
    `,
  ],
})
export class ListarGastoComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  presupuesto: number;
  restante: number;

  constructor(private _ps: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;

    this.subscription = this._ps.getGastos().subscribe((result) => {
      console.log(result);
    });
  }
  ngOnInit(): void {
    this.presupuesto = this._ps.presupuestoTotal;
    this.restante = this._ps.presupuestoActual;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
