import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//auth service done by xande + Gerald for Login and Register functions

export class AuthService {

  constructor(private http:HttpClient) { 
    
  }
  authUser(username: string, password: string) {
    return this.http.get('/api/authuser/' + username + "/" + password);
  }

  register(username: string, password: string) {
    return this.http.get('/api/register/' + username + "/" + password);
  }

  setSecureToken(secure_token: string) {
    localStorage.setItem("LoggedIn", secure_token)
  }

  getSecureToken() {
    return localStorage.getItem("LoggedIn")
  }

  setUserRole(role: string) {
    localStorage.setItem("UserRole", role);
  }

  getUserRole() {
    return localStorage.getItem("UserRole")
  }

}
