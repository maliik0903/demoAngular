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


const appRoutes : Routes = [
  {path: "login",component:LoginComponent  },
  {path: "tickets",component:TicketsComponent  },
  {path: "new-tickets",component: NewticketsComponent  },
  {path: "employes",component:AddEmployeComponent },
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
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [AuthenticationService,    EmployeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
