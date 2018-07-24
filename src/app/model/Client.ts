import { Contact } from "./common/Contact";
import { Address } from "./common/Address";
import { Person } from "./common/Person";
export class Client {
    id: string;
    name: string;
    alias: string;
    clientContact: Contact;
    clientAddress: Address;
    contactPerson: Person;
}