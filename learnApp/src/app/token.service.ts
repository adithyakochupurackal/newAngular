import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) {  }

  sendTokenRequest(userName: string, password: string, role: string) : Observable<any>{
    let jsonRequestBody: any = {userName: userName, password: password, roles: role};
    let url = 'http://localhost:8234/authenticate';
    return this.http.post(url,jsonRequestBody, {responseType: 'text' as 'json'});
  }

  sendAuthRequest(token: string) : Observable<any>{
    const headers = new HttpHeaders().set('Authorization', "Bearer" + token);
    let url = 'http://localhost:8234/api1';
    return this.http.post(url, { headers, responseType: 'text' as 'json'});
  }
  onSubmit(userName: string, password: string, role: string) {
    this.sendTokenRequest(userName, password, role).pipe(
      tap((response: any) => {
        // Handle the response, e.g., save the token if the authentication is successful
        console.log('Authentication Response:', response);
        const token = response; // Assuming response contains the token
        localStorage.setItem('token', token); // Save the token for later use
      })
    ).subscribe({
      next: (response) => {
        // Handle success
        console.log('Login successful:', response);
      },
      error: (error) => {
        // Handle error
        console.error('Login failed:', error);
      }
    });
  }
   
  }
