import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Container } from '../model/container';
import { MatSnackBar } from '@angular/material';
import { ContainerService } from '../services/container.service';

@Component({
    //moduleId: module.id,
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss']
})
export class ContainerComponent implements OnInit {
    @Input() container: Container;

    form: FormGroup;
    name = new FormControl("", Validators.required);
    // view object
    //container = new Container();
  

    constructor(fb: FormBuilder, public snackBar: MatSnackBar, private containerService: ContainerService) {
        this.form = fb.group({
            "name": this.name,
            "description": ["", Validators.required]
        });

    }

    ngOnInit() {
        //this.containerService.getContainers();
        // this.containerService.getContainers()
        //     .subscribe(containers => this.containerList = containers);
    }
    onSave(): void {

        this.container = new Container();

        this.container.name = this.form.get('name').value;
        this.container.description = this.form.get('description').value;
        //Call Service
        //this.containerList.push(this.container);
        this.container = null;
        //this.openSnackBar("Saved", "Success");

    }
    onReset(): void {
        console.log('Reset click');
        this.form.get('description').setValue('');
        this.form.get('name').setValue('');
    }
    
}
