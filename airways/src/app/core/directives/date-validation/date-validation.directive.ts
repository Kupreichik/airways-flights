import { ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export function dateValidation(): ValidatorFn {
  return (control): ValidationErrors | null => {
    if (control.value === '') return null;

    const futureError = { isFuture: true };

    if (control.value.length > 0 && control.value.length < 8) return futureError;

    const currentDate = moment();
    const userDate = moment(control.value, 'MM/DD/YYYY');

    if (userDate.isSameOrAfter(currentDate, 'day')) return futureError;
    if (userDate.format('MM/DD/YYYY') === 'Invalid date') return futureError;

    return null;
  };
}
