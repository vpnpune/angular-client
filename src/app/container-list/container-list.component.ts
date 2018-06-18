import { Component, OnInit } from '@angular/core';
import { Container } from '../model/container';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})
export class ContainerListComponent implements OnInit {
  selectedContainer: Container;
  //list
  containerList: Container[] = [];
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onEdit(i: number, obj: Container): void {
    this.selectedContainer = obj;
    console.log('Edit click');

}
onDelete(i: number, obj: Container): void {
    console.log('Delete clicked');
    this.containerList.splice(i, 1);
    this.openSnackBar("Deleted", "Success");
}
openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
        duration: 2000,
    });
}
}
