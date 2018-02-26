import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { error } from 'selenium-webdriver';
import { nextTick } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:number=0

  constructor(private authService : AuthenticationService , private router:Router) { }

  ngOnInit() {
  }
  onLogin(user){
    this.authService.login(user)
        .subscribe (Response=>{
          let jwt = Response.headers.get('Authorization');
         // console.log(Response.headers.get('Authorization'));
         this.authService.saveToken(jwt);
         this.router.navigateByUrl('/tickets')
        
      
        },
        error =>{
          this.mode=1;
        }

      )
  }
  registration(){
    this.router.navigateByUrl('/register')
  }

}

