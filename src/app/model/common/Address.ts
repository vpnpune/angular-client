import { Country } from "./Country";
import { ProvincialState } from "./ProvincialState";

export class Address {
    line1: string;
    line2: string;
    line3: string;
    city :string;
    zip:string;
    country:Country;
    state:ProvincialState;

  }
