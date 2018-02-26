import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeService } from '../../../service/Employee.service';


@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
 
  router: Router;
  form : FormGroup;
  nameControl :FormControl
  addressControl:FormControl 
  employes: any;
   submitted = false;


  constructor(private EmployeService : EmployeService) { }

  ngOnInit() {
    this.nameControl = new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
    this.addressControl= new FormControl("", Validators.required)

    this.form = new FormGroup({
      "name" : this.nameControl,
      "address" : this.nameControl
    })
  }
 
  add(employe){  
  
    this.EmployeService.saveUser(employe).subscribe(result=>{
      console.log(result.json)
      this.employes = result.json()
    //  this.router.navigate(['/employes'])
      
  },
  error=>{
    console.log(error)
  }
)
  }
}
