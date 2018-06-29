import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() tableHeaders: string[];
  @Input() tableBody: any[] = [];

  constructor() {
    console.log(this.tableBody);
   }

  ngOnInit() {
    console.log(this.tableBody);
  }
}
