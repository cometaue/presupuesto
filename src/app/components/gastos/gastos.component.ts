import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styles: [
    `
      h2 {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 600;
      }
    `,
  ],
})
export class GastosComponent implements OnInit {
  constructor(private _ps: PresupuestoService, private _router: Router) {}

  ngOnInit(): void {
    if (this._ps.presupuestoTotal == 0) this._router.navigate(['/presupuesto']);

    console.log(this._ps.presupuestoTotal);
  }
}
