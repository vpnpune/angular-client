import { Component, OnInit,ViewChild} from '@angular/core';
import { StorageCondition } from './../model/StorageCondition';

@Component({
  selector: 'app-storage-condition',
  templateUrl: './storage-condition.component.html',
  styleUrls: ['./storage-condition.component.css']
})
export class StorageConditionComponent implements OnInit {
  @ViewChild('f') form: any;
    storageCondition: StorageCondition;
    tableHeaderList: string[] = [];
    tableBodyList: StorageCondition[] = [];
  constructor() { 
    console.log('Constructor Called');
        this.tableHeaderList = ['Sr. No', 'Name', 'Description'];
  }

  ngOnInit() {
    this.storageCondition = new StorageCondition();

  }
  onSave(): void {
    console.log('this.storageCondition: ', this.storageCondition);
    this.tableBodyList.push(this.storageCondition);
}
onReset(): void {
    this.form.reset();
}

}
