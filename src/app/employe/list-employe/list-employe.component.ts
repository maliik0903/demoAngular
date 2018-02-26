import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../../service/Employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
  employes: any = undefined;
  SelectedEmployeId
  
  constructor(private EmployeService : EmployeService, private Router : Router) { }

  ngOnInit() {
    this.refreshData()
  }
  refreshData(){
    this.EmployeService.findAll().subscribe(result=>{
                                  console.log(result.json)
                                  this.employes = result.json()
    })
    
  }

  add1(){
    this.Router.navigateByUrl('/AddEmployes')
   }
delete(id){
 this.EmployeService.delete(id).subscribe(
                               (result)=>{
                              this.refreshData();
    },
    error=>{
      console.log(error)
    }

  )
}
 
details(username){
  this.Router.navigateByUrl('/DetailsEmployes')
}

}
