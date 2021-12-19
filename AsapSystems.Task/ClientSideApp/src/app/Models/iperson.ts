import { IAddress } from "./iaddress";

export interface IPerson {
    id: number,
    Name: string,
    AddressId: number,
    Age: number,
    Address: IAddress
}
