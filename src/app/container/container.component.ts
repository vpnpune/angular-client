import { Container } from './../model/container';
import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonListService } from '../services/common-list.service';

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

    constructor(private listService: CommonListService) {
        this.tableHeaderList = ['Sr. No', 'Name', 'Description', 'Update', 'Delete'];
    }

    ngOnInit() {
        this.container = new Container();
    }

    onSave(): void {

        this.tableBodyList.push(this.container);
        this.listService.notifyChildren(this.tableBodyList);
        this.container = new Container();
        this.form.reset();
    }
    onReset(): void {
        this.form.reset();
    }
}
