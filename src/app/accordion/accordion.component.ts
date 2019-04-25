import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {

  @Input() listItems: any[];
  @Output() selectedItem = new EventEmitter<any>();
  state = {
    showList: false
  };

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {
  }

  private setState(key, value) {
    this.state = { ...this.state, [key]: value };
    this.cd.detectChanges();
  }

  toggleList() {
    this.setState('showList', !this.state.showList);
  }

  clickedItem(item) {
    this.selectedItem.emit(item);
  }

}
