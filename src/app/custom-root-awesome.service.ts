import { Injectable } from '@angular/core';
import { AwesomeService } from './awesome/awesome-service.interface'; 

@Injectable()
export class CustomRootAwesomeService implements AwesomeService {

  private registry = new Map<string, string>();

  constructor() {
    this.registry.set('from', 'Custom Root');
  }

  get(key: string): string {
    return (this.registry.has(key) && this.registry.get(key));
  }

  set(key: string, value: string) {
    this.registry.has(key) || this.registry.set(key, value);
  }

}