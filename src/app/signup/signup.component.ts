import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UbidotsService } from '../ubidots.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm : FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
      });
  }
  register() {
    this.authService.register(this.registerForm.value.username, this.registerForm.value.password).subscribe();
    this.router.navigateByUrl('/Login');

    }
}
