import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css']
})
export class UsertypeComponent {

  constructor (private router : Router){}

  go(){
    this.router.navigateByUrl('/user')
  }
  go1(){
    this.router.navigateByUrl('/admin')
  }
}
