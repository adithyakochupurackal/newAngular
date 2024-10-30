import { Component } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-jwt-component',
  templateUrl: './jwt-component.component.html',
  styleUrls: ['./jwt-component.component.css']
})
export class JwtComponentComponent {
  userName: string = '';
  password: string = '';
  role: string = '';

  constructor(private tokenService: TokenService) {}

  onSubmit() {
    this.tokenService.onSubmit(this.userName, this.password, this.role);
  }

 

}