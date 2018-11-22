import * as angular from 'angular';
import { componentsModule } from '../modules';
import { ng1XServiceQ1 } from '../services/ng1xServiceQ1';


class ng1xChildComponent implements angular.IComponentController {

    data: string;

    constructor(private ng1XServiceQ1: ng1XServiceQ1) {
    }

    $onInit() {
        this.ng1XServiceQ1.getData().then((data) => {
            this.data = data;
        })
    }

}

const compConf: angular.IComponentOptions = {
    controller: ng1xChildComponent,
    templateUrl: './ng1xChildComponentTemplate.html',
    bindings: {
        astring: '@',
        aobj: '<',
        twoway: '='
    }
};

componentsModule.component('ng1xChild', compConf);
