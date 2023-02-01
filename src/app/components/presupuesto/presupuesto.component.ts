import { Component } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styles: [
    `
      #aceptar {
        background-color: #c94b4b;
      }

      #aceptar:hover {
        background-color: #4b134f;
      }

      h2 {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
        font-family: 'Montserrat', sans-serif;
        color: white;
      }

      .mssgError {
        font-size: 1.2em;
      }
    `,
  ],
})
export class PresupuestoComponent {}
