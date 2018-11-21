import { Component, OnInit, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface dataType {
    colors: string[]
}

@Component({
    
    selector: 'simple-child',
    template: `
        <div class="ng2x">
            ng2-simple-child
            <ul>
                <li>
                    Observable w/ async pipe: <strong>{{ (observableData | async)?.colors | json }}</strong>
                </li>
                <li>
                    Promise w/ async pipe: <strong>{{ (promiseData | async)?.colors | json }}</strong>
                </li>
            </ul>
        </div>
    `
})
export class SimpleChildComponent implements OnInit {
    
    observableData: Observable<dataType>;
    promiseData: Promise<dataType>;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        this.observableData = this.httpClient.get<dataType>("http://localhost:3000/root");
        this.promiseData = this.httpClient.get<dataType>("http://localhost:3000/root").toPromise();
    }

}
