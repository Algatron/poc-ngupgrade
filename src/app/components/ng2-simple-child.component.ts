import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import MockData from '../../models/mock-data.model';

@Component({
    selector: 'simple-child',
    templateUrl: 'ng2-simple-child.template.html'
})
export class ng2SimpleChildComponent implements OnInit {

    private readonly URI = "http://localhost:3000/api";

    @Output() add = new EventEmitter();

    // Async
    observableData: Observable<MockData>;
    observableCaughtErr: Observable<MockData>;
    observableErr: Observable<MockData>;
    promiseData: Promise<MockData>;

    // Resolved
    resolvedObservable: MockData;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        
        // Async
        this.observableData = this.httpClient.get<MockData>(this.URI);
        this.observableCaughtErr = this.httpClient.get<MockData>(this.URI)
            .pipe(catchError((err) => of({ colors: ['some defaults'] })));
        this.observableErr = new Observable((observer) => {
            setTimeout(() => {
                observer.error("someerrrrrr");
            }, 2000);
        });
        this.promiseData = this.httpClient.get<MockData>(this.URI).toPromise();
            
        // Resolved
        this.httpClient.get<MockData>(this.URI).subscribe(
            result => {
                setTimeout(() => {
                    this.resolvedObservable = result
                }, 2000);
            }
        );
    }

}
