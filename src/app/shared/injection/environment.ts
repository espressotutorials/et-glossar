import { inject, InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

const ENVIRONMENT = new InjectionToken<any>('app env', {
    providedIn: 'root',
    factory: () => environment
  }
);

export const API_URL = new InjectionToken<string>('api url', {
    providedIn: 'root',
    factory: () => {
      const env = inject(ENVIRONMENT);

      return env.API_URL;
    }
});
