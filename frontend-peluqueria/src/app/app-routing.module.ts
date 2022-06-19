import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './Components/add-booking/add-booking.component';

const routes: Routes = [
  {path: 'add-booking', component: AddBookingComponent},
  {path: '**', redirectTo: 'add-booking'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
