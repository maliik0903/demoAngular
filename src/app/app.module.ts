import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule  } from '@angular/common/http';

import { AuthenticationService } from '../service/authentication.service';
import { TicketsComponent } from './tickets/tickets.component';
import { NewticketsComponent } from './newtickets/newtickets.component';
import { EmployeService } from '../service/Employee.service';
import { AddEmployeComponent } from './employe/add-employe/add-employe.component';
import { ListEmployeComponent } from './employe/list-employe/list-employe.component';
import { DétailsEmployeComponent } from './employe/d\u00E9tails-employe/d\u00E9tails-employe.component';


const appRoutes : Routes = [
  {path: "login",component:LoginComponent  },
  {path: "tickets",component:TicketsComponent  },
  {path: "new-tickets",component: NewticketsComponent  },
  {path: "AddEmployes",component:AddEmployeComponent },
  {path: "ListEmployes",component:ListEmployeComponent },
  {path: "register",component:RegistrationComponent },

  {path: "",redirectTo:"login",pathMatch:"full" }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewticketsComponent,
    RegistrationComponent,
    TicketsComponent,
    NewticketsComponent,
    AddEmployeComponent,
    ListEmployeComponent,
    DétailsEmployeComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [AuthenticationService,    EmployeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
