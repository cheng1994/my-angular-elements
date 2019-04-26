import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    DropdownComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // array of tuples containing component and html name to be used
    const elements: any[] = [
      [DropdownComponent, 'my-dropdown']
    ];

    for(const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector});
      customElements.define(name, el);
    }
  }
}
