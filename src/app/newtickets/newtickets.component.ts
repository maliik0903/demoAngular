import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-newtickets',
  templateUrl: './newtickets.component.html',
  styleUrls: ['./newtickets.component.css']
})
export class NewticketsComponent implements OnInit {


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
