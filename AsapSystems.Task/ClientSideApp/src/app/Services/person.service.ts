import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPerson } from '../Models/iperson';
import { Observable, observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:55808/api/People/'

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get<IPerson[]>(this.baseUrl)
  }

  createPerson(person: IPerson) {
    return this.http.post(this.baseUrl, person);
  }

  updatePerson(id: number, person: IPerson) {
    return this.http.put(this.baseUrl + id, person);
  }

  deletePerson(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  getPersonById(id: number) {
    return this.http.get(this.baseUrl + id);
  }
}