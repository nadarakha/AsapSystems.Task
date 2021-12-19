import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';
import { IAddress} from '../../../Models/iaddress'
@Component({
  selector: 'app-viewAddress',
  templateUrl: './viewAddress.component.html',
  styleUrls: ['./viewAddress.component.css']
})
export class ViewAddressComponent implements OnInit {

 addressesList: IAddress[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.addressService.getAddress().subscribe(data => {
      this.addressesList = data;
    }
    );
  }

  deleteAddress(id) {
    this.addressService.deleteAddress(id).subscribe(data => {
      this.addressesList = this.addressesList.filter(item => item.id !=id);
    });
  }
}

