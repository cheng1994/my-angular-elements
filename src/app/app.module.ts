import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    AccordionComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // array of tuples containing component and html name to be used
    const elements: any[] = [
      [AccordionComponent, 'my-accordion']
    ];

    for(const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector});
      customElements.define(name, el);
    }
  }
}
