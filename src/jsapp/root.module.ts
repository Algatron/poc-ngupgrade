import * as angular from 'angular';

angular.module('myjsapp', [])
    .run(() => {
        (console as any).info('hi!');
    });
