import { Injectable } from '@angular/core';
import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  create(key: string, value: any) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
  read(key: string): any {
    let result = localStorage.getItem(key);
    if (typeof result === 'string') {
      result = JSON.parse(result);
    }
    return result;
  }

  update() {

  }

  delete() {

  }
}
