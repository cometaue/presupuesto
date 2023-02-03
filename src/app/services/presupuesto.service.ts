import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  public presupuestoTotal: number;
  public presupuestoActual: number;

  constructor() {
    this.presupuestoTotal = 0;
    this.presupuestoActual = 0;
  }

  public get PresupuestoTotal(): number {
    return this.presupuestoTotal;
  }

  public set PresupuestoTotal(v: number) {
    this.presupuestoTotal = v;
  }

  public get PresupuestoActual(): number {
    return this.presupuestoActual;
  }

  public set PresupuestoActual(v: number) {
    this.presupuestoActual = v;
  }
}
