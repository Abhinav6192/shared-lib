import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-content',
  template: `
    <p>
      shared-content works! making changes from profile project.
    </p>
  `,
  styles: [
  ]
})
export class SharedContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
