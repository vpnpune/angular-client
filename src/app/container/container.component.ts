import { Container } from './../model/container';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss']
})
export class ContainerComponent implements OnInit {
  @ViewChild('f') form: any;
    container: Container;
    tableHeaderList: string[] = [];
    tableBodyList: Container[] = [];

    constructor() {
        console.log('container Called');
        this.tableHeaderList = ['Sr. No', 'Name', 'Description'];
    }

    ngOnInit() {
        this.container = new Container();
    }

    onSave(): void {
        console.log('this.container: ', this.container);
        this.tableBodyList.push(this.container);
    }
    onReset(): void {
        this.form.reset();
    }
}
