import { Component,ViewChild, OnInit } from '@angular/core';
import { Client } from './../model/Client';
import { CommonListService } from '../services/common-list.service';
import { Contact } from '../model/common/Contact';
import { Address } from '../model/common/Address';
import { Person } from '../model/common/Person';

import { ProvincialState } from '../model/common/ProvincialState';
import { Country } from '../model/common/Country';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @ViewChild('f') form: any;

  // form model
  client: Client;
  // to show list
  tableHeaderList: string[] = [];
  tableBodyList: Client[] = [];
  stateList : ProvincialState[]=[];
  countryList: Country[]=[];
  constructor(private listService: CommonListService) {
    this.tableHeaderList = ['Sr. No', 'Name', 'Description', 'Update', 'Delete'];

   }

  ngOnInit() {
    // intitilization
    this.client = new Client();
    this.client.clientContact = new Contact();
    this.client.clientAddress = new Address();
    this.client.contactPerson= new Person();
    this.client.contactPerson.contact =new Contact();
    let state:ProvincialState= new ProvincialState();

    state.id=1;
    state.name="Maharashtra";
    state.countryId=1;
    this.stateList.push(state);
    state = new ProvincialState();
    state.id=2;
    state.countryId=1;
    state.name="Karnataka";
    this.stateList.push(state);
    console.log(this.stateList);

    let country:Country= new Country();
    country.id=1;
    country.name="India";
    this.countryList.push(country);
    country =  new Country();
    country.id=2;
    country.name="Great Britain";
    this.countryList.push(country);
    console.log(this.countryList);


  }
  
  onSave(): void {

    this.tableBodyList.push(this.client);
    this.listService.notifyChildren(this.tableBodyList);
    console.log(JSON.stringify(this.client));
    //this.client = new Client();
    this.form.reset();
}
onReset(): void {
    this.form.reset();
}

}
