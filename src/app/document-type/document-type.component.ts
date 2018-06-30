import { Component, ViewChild, OnInit } from '@angular/core';
import { DocumentType } from './../model/DocumentType';
import { ENTER, COMMA } from '@angular/cdk/keycodes'
import { MatChipInputEvent } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'document-type',
    templateUrl: 'document-type.component.html',
    styleUrls: ['document-type.component.scss']
})
export class DocumentTypeComponent {
    @ViewChild('f') form: any;
    documentType: DocumentType;
    tableHeaderList: string[] = [];
    tableBodyList: DocumentType[] = [];
    //chips
    // Enter, comma
    separatorKeysCodes = [ENTER, COMMA];

    visible: boolean = true;
    selectable: boolean = true;
    removable: boolean = true;
    addOnBlur: boolean = true;
    // master array to validate file types
    FORMATS =["pdf","doc","xls","jpg","png","ppt"];
    
  

    constructor() {
        console.log('constructor Called');
        this.tableHeaderList = ['Sr. No', 'Name', 'Description'];
    }

    ngOnInit() {
        this.documentType = new DocumentType();
        this.documentType.acceptableFormats=[];

    }

    onSave(): void {
        console.log('this.documentType: ', this.documentType);
        this.tableBodyList.push(this.documentType);
    }
    onReset(): void {
        this.form.reset();
    }
    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;

        // Add our format
        if ((value || '').trim()) {
            
            this.documentType.acceptableFormats.push(value.trim() );
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }

    }

    remove(format: any): void {
        let index = this.documentType.acceptableFormats.indexOf(format);

        if (index >= 0) {
            this.documentType.acceptableFormats.splice(index, 1);
        }
    }
}
