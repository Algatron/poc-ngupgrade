import { servicesModule } from "../modules";

export class ng1XServiceQ1 {
    constructor(private $q: angular.IQService) {
    }

    getData(): angular.IPromise<string> {
        const def = this.$q.defer<string>();
        setTimeout(() => {
            def.resolve('ng1XServiceQ1');
        }, 1000);
        return def.promise;
    };
};

servicesModule.service("ng1XServiceQ1", ng1XServiceQ1);