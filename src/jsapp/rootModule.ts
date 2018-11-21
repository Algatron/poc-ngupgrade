import * as angular from 'angular';

import './modules';

import './components/ng1xRootComponent';
import './downgraded/components/down.ng2-root.component';

angular.module('myjsapp', [
        "components",
        "downgradedComponents"
    ])
    .run(() => {
        console.info('AngularJS root module loaded!');
    });
