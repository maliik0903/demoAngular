import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { error } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks;
  constructor(public authService:AuthenticationService ,private router:Router) { }

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
    this.router.navigateByUrl('/new-tasks')
        
  }

}
