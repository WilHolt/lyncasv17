import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { provideStore } from '@ngxs/store';
import { ngxsConfig } from './ngxs.config';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { ApplicationState } from './shared/state/application.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([BrowserAnimationsModule, PoHttpRequestModule]), provideStore([ApplicationState], ngxsConfig), withNgxsReduxDevtoolsPlugin()],

};