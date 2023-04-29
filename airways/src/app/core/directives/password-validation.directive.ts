import { ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  PASSWORD_CHARACTERS_REGEX,
  PASSWORD_NUMBER_REGEX,
  PASSWORD_SYMBOL_REGEX,
} from '../../shared/constants/constants';

export function passwordValidation(): ValidatorFn {
  return (control): ValidationErrors | null => {
    if (control.value.length < 8) return null;

    const letterError = { isNotLetter: true };
    const numberError = { isNotNumber: true };
    const symbolError = { isNotSymbol: true };

    if (!PASSWORD_CHARACTERS_REGEX.test(control.value)) {
      return letterError;
    }

    if (!PASSWORD_NUMBER_REGEX.test(control.value)) {
      console.log(control.value, 'numbers');
      return numberError;
    }

    if (!PASSWORD_SYMBOL_REGEX.test(control.value)) {
      console.log(control.value, 'symbol');
      return symbolError;
    }

    return null;
  };
}
