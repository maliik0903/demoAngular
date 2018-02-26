import { Component, OnInit, Input } from '@angular/core';
import { EmployeService } from '../../../service/Employee.service';

@Component({
  selector: 'app-détails-employe',
  templateUrl: './détails-employe.component.html',
  styleUrls: ['./détails-employe.component.css']
})
export class DétailsEmployeComponent implements OnInit {

     @Input()  
    id
    username
    employe
      constructor(private EmployeService : EmployeService) { }
    
      ngOnInit() {
      }
    
      ngOnChanges() {
        this.findEmployess(this.username)
      }
      findEmployess(username){
        this.EmployeService.findUserByUsername(username).subscribe(
    
                                      (result)=>{
                                     this.employe = result.json();
           },
           error=>{
             console.log(error)
           }
       
         )
       }
      }
