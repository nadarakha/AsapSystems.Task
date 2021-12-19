import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ViewPeopleComponent }from './Components/People/viewPeople/viewPeople.component'
import{PutPersonComponent }from './Components/People/putPerson/putPerson.component'
import{ViewAddressComponent}from './Components/Addresses/viewAddress/viewAddress.component'
import{PutAddressComponent }from './Components/Addresses/putAddress/putAddress.component'
const routes: Routes = [{ path: '', redirectTo: '/People/ViewPeople', pathMatch: 'full' },
{path: 'People/ViewPeople', component: ViewPeopleComponent},
{path: 'People/PutPerson', component: PutPersonComponent},
{path: 'People/PutPerson/:id', component: PutPersonComponent},
{path: 'Addresses/PutAddress', component: PutAddressComponent},
{path: 'Addresses/PutAddress/:id', component: PutAddressComponent},
{path: 'Addresses/ViewAddress', component: ViewAddressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
