import * as angular from 'angular';
import { componentsModule } from '../modules';


class ng1xRootComponent implements angular.IComponentController {
}

const compConf: angular.IComponentOptions = {
    controller: ng1xRootComponent,
    templateUrl: './ng1xRootComponentTemplate.html'
};

componentsModule.component('ng1xRoot', compConf);
