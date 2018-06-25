import { Component, OnInit, ViewChild } from '@angular/core';
import { Container } from '../model/container';
import { ContainerService } from '../services/container.service';

@Component({
    //moduleId: module.id,
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss']
})
export class ContainerComponent implements OnInit {

    @ViewChild("f") form: any;
    container:Container
    tableHeaderList: string[] = [];
    tableBodyList: Container[] = [];

    constructor(private containerService: ContainerService) {
        console.log("container Called");
        this.tableHeaderList = ["Sr. No", "Name", "Description"];
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
