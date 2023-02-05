import { AbstractControl } from '@angular/forms';
import { PresupuestoService } from '../services/presupuesto.service';

export const Nonumero = (control: AbstractControl) => {
  const valor = control.value;
  if (valor > 0) {
    return null;
  }
  return { negative: true };
};

export const Comprobar = (service: PresupuestoService) => {
  return (control: AbstractControl) => {
    if (control.value > service.presupuestoActual) {
      return { sobreCredito: true };
    }
    return null;
  };
};
