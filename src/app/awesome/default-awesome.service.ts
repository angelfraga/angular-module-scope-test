import { Injectable } from '@angular/core';
import { AwesomeService } from './awesome-service.interface'; 

@Injectable({
  providedIn: 'root'
})
export class DefaultAwesomeService implements AwesomeService {

  private registry = new Map<string, string>();

  constructor() {
    this.registry.set('from', 'default');
  }

  get(key: string): string {
    return (this.registry.has(key) && this.registry.get(key));
  }

  set(key: string, value: string) {
    this.registry.has(key) || this.registry.set(key, value);
  }

}