import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{AddressService} from '../../../Services/address.service'
import { IAddress } from '../../../Models/iaddress';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-putAddress',
  templateUrl: './putAddress.component.html',
  styleUrls: ['./putAddress.component.css']
})
export class PutAddressComponent implements OnInit {
  putForm: FormGroup;
  submitted = false;
  id:number;
  address:IAddress;
  addressList:IAddress[]=[];

  constructor(private formBuilder:FormBuilder,
    private addressService:AddressService, private route: ActivatedRoute,
    private router: Router, )
     { 
      this.putForm = this.formBuilder.group({
        name: ['', Validators.required],
        id:[] 
    });
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=undefined)
    {
      this.addressService.getAddressById(this.id).subscribe((data: IAddress) => {
        this.address = data;
        this.putForm.patchValue(data);
      })
    }
  }

  onSubmit(formData) {
    this.submitted = true;

    if(this.id!=undefined)
    {
    this.addressService.updateAddress(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('/Addresses/ViewAddress');
    });}

    else{this.addressService.createAddress(formData.value).subscribe(res => {
      this.router.navigateByUrl('/Addresses/ViewAddress');
    })}
    
    if (this.putForm.invalid) {
        return;
    }
  }

onReset() {
        this.submitted = false;
        this.router.navigateByUrl('/Addresses/ViewAddress');
}
get f() { return this.putForm.controls; }

getAddress()
{
  this.addressService.getAddress().subscribe(d=>{this.addressList=d});
}

createAddress(address)
{this.addressService.createAddress(address);

}

updateAddress(id,address)
{
  this.addressService.updateAddress(id,address); 
}
}

