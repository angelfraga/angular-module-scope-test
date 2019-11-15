import { Injectable } from '@angular/core';
import { AwesomeService } from './../awesome'; 

@Injectable({
  providedIn: 'root'
})
export class CustomChildAwesomeService implements AwesomeService {

  private registry = new Map<string, string>();

  constructor() {
    this.registry.set('from', 'CustomChildAwesomeService');
  }

  get(key: string): string {
    return (this.registry.has(key) && this.registry.get(key));
  }

  set(key: string, value: string) {
    this.registry.has(key) || this.registry.set(key, value);
  }

}