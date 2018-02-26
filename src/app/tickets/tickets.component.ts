import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { EmployeService } from '../../service/Employee.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  Employes: any;

 
  tasks;
  constructor(public authService:AuthenticationService ,private router:Router,EmployeService:EmployeService) { }

  ngOnInit() {
    this.authService.getTasks()
    .subscribe( data=>{
      this.tasks=data;
    },err=>{
      this.authService.logout();
      this.router.navigateByUrl("/login")

      })
     
  }
  NewTask(){
    this.router.navigateByUrl('/new-tickets')
        
  }
  Onlogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
