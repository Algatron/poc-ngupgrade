import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { ng2RootComponent } from './components/ng2-root.component';
import { SimpleChildComponent } from './components/ng2-simple-child.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ng2RootComponent,
    SimpleChildComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  entryComponents: [
    ng2RootComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myjsapp']);
  }
}
