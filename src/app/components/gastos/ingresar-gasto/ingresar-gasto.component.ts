import { Component } from '@angular/core';

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
      }
      h4 {
        font-weight: 620;
        font-size: 1.5rem;
      }
    `,
  ],
})
export class IngresarGastoComponent {}
