import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPeopleComponent } from './Components/People/viewPeople/viewPeople.component';
import { PutPersonComponent } from './Components/People/putPerson/putPerson.component';
import{ViewAddressComponent}from './Components/Addresses/viewAddress/viewAddress.component'
import{PutAddressComponent }from './Components/Addresses/putAddress/putAddress.component'

@NgModule({
  declarations: [
    AppComponent,
    ViewPeopleComponent,
    PutPersonComponent,
    PutAddressComponent,
    ViewAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
