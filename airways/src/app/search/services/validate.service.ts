import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  dateValidator(control: FormControl): ValidationErrors | null {
    const oneDay = 86400000;
    const inputDate = control.value;
    if (!inputDate) return null;
    return Date.now() - oneDay - Date.parse(inputDate) > 0 ? { incorrectDate: true } : null;
  }
}
