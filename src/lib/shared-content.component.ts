import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-content',
  template: `
    <p>
      shared-content works! making changes from profile project.
    </p>
    <p>
      checking if making changes here is visible in local or not without commiting it.
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
