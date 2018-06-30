
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonListService {

    parentSubject: Subject<any> = new Subject();

    notifyChildren(value: any) {
        this.parentSubject.next(value);
    }

    constructor() { }

}