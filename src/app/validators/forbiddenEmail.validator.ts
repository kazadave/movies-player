import { AbstractControl } from '@angular/forms';

interface ValidationResponse {
  [key: string]: any | null;
}

export function forbiddenEmail(control: AbstractControl): ValidationResponse {
  const forbiddenEmails = [
    'kaza@sw',
    'aaa@aa'
  ];

  const status = forbiddenEmails.includes(control.value);
  return status ? {
    forbiddenEmail: true
  } : null;
}
