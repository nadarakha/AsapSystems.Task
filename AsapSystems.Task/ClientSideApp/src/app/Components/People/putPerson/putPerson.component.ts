import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../../../Services/address.service'
import { IAddress } from '../../../Models/iaddress';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../../Services/person.service';
import { IPerson } from '../../../Models/iperson';

@Component({
  selector: 'app-putPerson',
  templateUrl: './putPerson.component.html',
  styleUrls: ['./putPerson.component.css']
})
export class PutPersonComponent implements OnInit {

  putForm: FormGroup;
  submitted = false;
  id: number;
  person: IPerson;
  addressList: IAddress[] = [];

  constructor(private formBuilder: FormBuilder, private personService: PersonService,
    private addressService: AddressService, private route: ActivatedRoute,
    private router: Router,) {
    this.putForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      addressId: ['', Validators.required],
      id: []
    });
  }

  ngOnInit() {
    this.getAddress();
    this.id = this.route.snapshot.params['id'];
    if (this.id != undefined) {
      this.personService.getPersonById(this.id).subscribe((data: IPerson) => {
        this.person = data;
        this.putForm.patchValue(data);
      })
    }
  }

  onSubmit(formData) {
    this.submitted = true;
    console.log(formData.value)
    if (this.id != null) {
      this.personService.updatePerson(this.id, formData.value).subscribe(res => {
        this.router.navigateByUrl('/People/ViewPeople');
      });
    }

    else {
      this.personService.createPerson(formData.value).subscribe(res => {
        this.router.navigateByUrl('/People/ViewPeople');
      })
    }

    if (this.putForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.router.navigateByUrl('/People/ViewPeople');
  }
  get f() { return this.putForm.controls; }

  getAddress() {
    this.addressService.getAddress().subscribe(d => { this.addressList = d })
  }

  createPerson(person) {
    this.personService.createPerson(person);
  }

  updatePerson(id, person) {
    this.personService.updatePerson(id, person);
  }
}
