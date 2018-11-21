import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'async-inputs-child',
    template: `
        <div class="ng2x">
            ng2-async-inputs-child
            <ul>
                {{ someString }}
            </ul>
        </div>
    `
})
export class AsyncInputsChildComponent implements OnInit {
    
    @Input() someString: string;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
    }

}
