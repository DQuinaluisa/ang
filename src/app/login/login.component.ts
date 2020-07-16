import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private token:  TokenService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  tokenJwt: any;
  nickname: any;
  passw: any;


  ingresar(){
    let  data = {
    "usuario" : {
      "nickname" : this.nickname,
      "passw" :  this.passw
    }
    }
    this.token.login(data).subscribe(
      response => {
        this.tokenJwt =response[ 'token' ];
        localStorage.setItem("guardarToken", this.tokenJwt);
       
        this.router.navigate(['/crear']);
      },
      error => {
        console.log('No vale');
      }
    )  
  }  

}
