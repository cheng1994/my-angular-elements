import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let headerEl: DebugElement;
  let listEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;

    headerEl = fixture.debugElement.query(By.css('.accordion__header'));
    listEl = fixture.debugElement.query(By.css('.accordion__list'));
    fixture.detectChanges();
  });

  describe('the list element', () =>{
    it('should not show', () => {
      const el = fixture.debugElement.query(By.css('.accordion__list'));
      expect(el.classes['hidden']).toBeTruthy();
    });

    it('should show', () => {
      component.toggleList();
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
