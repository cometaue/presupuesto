import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  public presupuestoTotal: number;
  public presupuestoActual: number;
  private gastos$ = new Subject<Producto>();

  constructor() {
    this.presupuestoTotal = 0;
    this.presupuestoActual = 0;
  }

  agregarGasto(producto: Producto) {
    this.presupuestoActual -= producto.cantidad;
    this.gastos$.next(producto);
  }

  getGastos(): Observable<Producto> {
    return this.gastos$.asObservable();
  }
}
