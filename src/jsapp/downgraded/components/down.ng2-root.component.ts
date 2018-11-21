import * as angular from 'angular';

import { downgradeComponent } from '@angular/upgrade/static';
import { ng2RootComponent } from 'src/app/components/ng2-root.component';
import { downgradedComponentsModule } from '../../modules';

downgradedComponentsModule
  .directive(
    'ng2Root',
    downgradeComponent({ component: ng2RootComponent }) as angular.IDirectiveFactory
  );