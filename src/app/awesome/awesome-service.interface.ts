import { InjectionToken } from '@angular/core';

export interface AwesomeService {
  set(key: string, value: string): void;
  get(key: string): string;
}

export const AWESOME_SERVICE = new InjectionToken<AwesomeService>("awesome-service");