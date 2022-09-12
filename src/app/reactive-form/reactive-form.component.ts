import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm!: FormGroup;
  constructor() {
    this.signupForm = new FormGroup({
      email: new FormControl('Enter Email', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  ngOnInit(): void {
  }

}
