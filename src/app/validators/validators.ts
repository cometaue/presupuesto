import { AbstractControl } from '@angular/forms';

export const Nonumero = (control: AbstractControl) => {
  const valor = control.value;
  if (valor > 0) {
    return null;
  }
  return { negative: true };
};
