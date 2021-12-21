import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent implements OnInit {
  searchTextControl = new FormControl('');
  constructor() {}

  ngOnInit(): void {}

  googlesearch() {
    window.open(
      'https://www.google.com/search?q=' + this.searchTextControl.value,
      '_blank'
    );
  }
}
