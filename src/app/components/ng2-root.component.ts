import { Component } from "@angular/core";

@Component({
    selector: 'ng2-root',
    template: `
        <div class="ng2x">
            ng2-root
            <simple-child></simple-child>
        </div>
    `
})
export class ng2RootComponent {
}