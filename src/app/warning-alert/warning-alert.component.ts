import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css'
})
export class WarningAlertComponent {
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
