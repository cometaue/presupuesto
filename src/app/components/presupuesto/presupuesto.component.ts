import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

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
export class PresupuestoComponent {
  miFormulario: FormGroup = this.fb.group({
    presupuesto: [, [Validators.required, this.isNOTaNumber]],
  });

  constructor(private fb: FormBuilder) {}
  enviar() {
    console.log('validacion correcta');
  }

  isNOTaNumber(control: FormControl) {
    let valor = parseFloat(control.value?.trim());
    if (!isNaN(valor) && valor > 0) {
      return null;
    } else if (!isNaN(valor) && valor < 0) return { isNegative: true };
    return { isNAN: true };
  }
}
