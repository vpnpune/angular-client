import { Injectable } from '@angular/core';
import { Container } from '../model/container';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor() { }
  getContainers():  Observable<Container[]> {
    console.log("In get Containers")
    let containerList: Container[] = [];

    return null;
  }
}
