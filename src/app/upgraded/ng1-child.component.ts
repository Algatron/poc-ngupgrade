
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ng1-child'
})
export class Ng1Child extends UpgradeComponent {

  @Input() astring: String;
  @Input() aobj: Object;
  @Input() twoway: Object;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('ng1xChild', elementRef, injector);
  }
}