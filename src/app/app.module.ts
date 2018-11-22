import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { ng2RootComponent } from './components/ng2-root.component';
import { ng2SimpleChildComponent } from './components/ng2-simple-child.component';
import { HttpClientModule } from '@angular/common/http';
import { ng2IOParentComponent } from './components/ng2-io-parent.component';
import { Ng1Child } from './upgraded/ng1-child.component';

@NgModule({
  declarations: [
    ng2RootComponent,
    ng2IOParentComponent,
    ng2SimpleChildComponent,
    Ng1Child
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  entryComponents: [
    ng2RootComponent
  ],
  providers: [
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myjsapp']);
  }
}
