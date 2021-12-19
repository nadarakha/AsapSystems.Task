import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddress } from '../Models/IAddress';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:55808/api/Addresses/';

  getAddress() {
    return this.http.get<IAddress[]>(this.baseUrl);

  }

  createAddress(address: IAddress) {
    return this.http.post(this.baseUrl, address);
  }

  updateAddress(id: number, address: IAddress) {
    return this.http.put(this.baseUrl + id, address);
  }

  deleteAddress(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  getAddressById(id: number) {
    return this.http.get(this.baseUrl + id);
  }
}
