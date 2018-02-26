import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Response } from '@angular/http/src/static_response';
import { error } from 'util';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.css']
})
export class NewTasksComponent implements OnInit {
  
private task : any ;
  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }
  OnSaveTask(task){
    this.authService.saveTask(task)
        .subscribe(Response=>{
          this.task=Response;
      

        },
        error=>{
         console.log(error)
        }
      )
  }

}
