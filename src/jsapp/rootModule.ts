import * as angular from 'angular';

import './modules';

// services
import './services/ng1xServiceQ1';

// components
import './components/ng1xRootComponent';
import './components/ng1xChildComponent';
import './downgraded/components/down.ng2-root.component';

angular.module('myjsapp', [
        "services",
        "components",
        "downgradedComponents"
    ])
    .run(() => {
        console.info('AngularJS root module loaded!');
    });
