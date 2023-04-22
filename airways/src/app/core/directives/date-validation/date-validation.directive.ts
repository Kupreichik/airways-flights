import { ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export function dateValidation(): ValidatorFn {
  return (control): ValidationErrors | null => {
    if (control.value === '') return null;

    if (control.value.length > 0 && control.value.length < 8) return { isFuture: true };

    const currentDate = moment();
    const userDate = moment(control.value, 'MM/DD/YYYY');

    if (userDate.isSameOrAfter(currentDate, 'day')) {
      return { isFuture: true };
    }

    if (userDate.format('MM/DD/YYYY') === 'Invalid date') {
      return { isFuture: true };
    }

    return null;
  };
}
