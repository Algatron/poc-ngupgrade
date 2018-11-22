import { Component } from "@angular/core";

@Component({
    selector: 'ng2-io-parent',
    template: `
        <div class="ng2x">
            ng2-io-parent
            <div>
                Values from this side:
                <div>For '@' and '<':  {{ stringForInput | json }}</div>
                <div>For '=':  {{ somObj | json }}</div>
            <div>
            <ng1-child 
                astring="{{ stringForInput }}" 
                [aobj]="stringForInput"
                [twoway]="somObj">
            </ng1-child>
        </div>
    `
})
export class ng2IOParentComponent {
    stringForInput = "bla";
    somObj = {
        stringProp: "somevalue",
        numProp: 1
    };
}