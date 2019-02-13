import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UbidotsService } from '../ubidots.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  results: any = false;
  role = sessionStorage.getItem("role");
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private ubidotsService: UbidotsService) { }

  ngOnInit() {
    this.loginForm = this.fb.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });
  }

  login() {
    this.authService.authUser(this.loginForm.value.username, this.loginForm.value.password).subscribe(data => {
    this.results = data;
      if (this.results[0].auth)
        this.authService.setSecureToken(this.loginForm.value.username);
        this.authService.setUserRole(this.results[0].role);

        this.router.navigateByUrl('/Cleaner');


    });
  }
}
