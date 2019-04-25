import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let headerEl: DebugElement;
  let listEl: DebugElement;

  // helper function to check if class exists
  const hasClass = (element, cls) => {
    debugger;
    return element.classList.toString().indexOf(cls) !== -1;
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;

    headerEl = fixture.debugElement.query(By.css('.accordion__header'));
    listEl = fixture.debugElement.query(By.css('.accordion__list'));
    fixture.detectChanges();
  });

  describe('the list element', () =>{
    it('should not show list', () => {
      const el = fixture.debugElement.query(By.css('.accordion__list'));
      expect(el.classes['hidden']).toBeTruthy();
    });

    it('should show list', () => {
      component.state.showList = false;
      const el = fixture.debugElement.query(By.css('.accordion__list'));
      expect(el.classes['hidden']).toBeFalsy();
    });
  });

  it('toggleList should update state', () => {
    const lastState = component.state;
    component.toggleList();
    expect(component.state).not.toEqual(lastState);
  });

  it('clickedItem should click', () => {
    component.listItems = [
      {label: 'a'},
      {label: 'b'},
      {label: 'c'},
      {label: 'd'},
    ];
    fixture.whenStable().then(() => {
      spyOn(component, 'clickedItem');
      fixture.debugElement.query(By.css('.accordion__item')).nativeElement.click();
      expect(component.clickedItem).toHaveBeenCalled();
    });

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
