import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = false;
  constructor() {}

  toggleDarkTheme() {
    if (this.isDark) {
      document.body.classList.remove('wave-ng-dark');
      this.isDark = false;
    } else {
      document.body.classList.add('wave-ng-dark');
      this.isDark = true;
    }
  }
}
