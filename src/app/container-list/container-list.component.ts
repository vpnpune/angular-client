import { Component, OnInit, Input } from '@angular/core';
import { Container } from '../model/container';

@Component({
    selector: 'app-container-list',
    templateUrl: './container-list.component.html',
    styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {

    @Input() tableHeaders: string[];
    @Input() tableBody: any[];

    constructor() { }

    ngOnInit() {

    }
}
