import { Component, OnInit, Input } from '@angular/core';
import { CommonListService } from '../services/common-list.service';

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

  constructor(private listService: CommonListService) {

  }

  ngOnInit() {
    this.listService.parentSubject.subscribe(result => {
      this.tableBody = result;
    });
  }

  keys(obj: any) : Array<string> {
    return Object.keys(obj);
  }
}
