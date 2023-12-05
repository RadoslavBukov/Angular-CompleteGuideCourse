import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-array-display',
  templateUrl: './btn-array-display.component.html',
  styleUrl: './btn-array-display.component.css'
})
export class BtnArrayDisplayComponent {
  showText = false;
  clickArray = [];

  changeDisplay() {
    this.clickArray.push(this.clickArray.length + 1);
    if (this.showText === true) {
      this.showText = !this.showText;
      return false;
    }
    this.showText = !this.showText;
    return true;
  }
}
