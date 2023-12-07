import { Component, Input, ViewEncapsulation, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-btn-array-display',
  templateUrl: './btn-array-display.component.html',
  styleUrl: './btn-array-display.component.css',
  encapsulation:ViewEncapsulation.Emulated,
})
export class BtnArrayDisplayComponent implements DoCheck{
  showText = false;
  clickArray = [];
  @Input() numberOfClicks = 0;

  ngDoCheck() {
  }

  changeDisplay() {
    this.clickArray.push(this.clickArray.length + 1);
    this.numberOfClicks += 1;
    if (this.showText === true) {
      this.showText = !this.showText;
      return false;
    }
    this.showText = !this.showText;
    return true;
  }
}
