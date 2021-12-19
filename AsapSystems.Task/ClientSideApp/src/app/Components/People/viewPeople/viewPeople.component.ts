import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../../services/person.service';
import { IPerson } from '../../../Models/iperson'

@Component({
  selector: 'app-viewPeople',
  templateUrl: './viewPeole.component.html',
  styleUrls: ['./viewPeople.component.css']
})
export class ViewPeopleComponent implements OnInit {
  public peopleList: IPerson[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.personService.getPeople().subscribe(data => {
      this.peopleList = data;
    }
    );
  }

  deletePerson(id) {
    this.personService.deletePerson(id).subscribe(data => {
      this.peopleList = this.peopleList.filter(item => item.id != id);
    });
  }
}