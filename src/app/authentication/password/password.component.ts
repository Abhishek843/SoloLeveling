import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  hide = true;

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.secondFormGroup = this.fb.group({
      smsCode: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.thirdFormGroup = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/\d/),
        Validators.pattern(/[A-Za-z]/),
        /* Other validators here */]
      ]
    });
  }

  getEmailErrorMessage() {
    return this.email?.hasError('required') ? 'Email is required' :
      this.email?.hasError('email') ? 'Not a valid email' :
        '';
  }

  getSmsCodeErrorMessage() {
    return this.smsCode?.hasError('required') ? 'SMS Code is required' :
      this.smsCode?.hasError('minLength') ? 'SMS Code must be six digits long' :
        '';
  }
  resetPassword() {
    // Handle the logic for resetting the password
    console.log('Password reset logic goes here');
  }

  get username() { return this.firstFormGroup?.get('username'); }
  get email() { return this.firstFormGroup?.get('email'); }
  get smsCode() { return this.secondFormGroup?.get('smsCode'); }
  get password() { return this.thirdFormGroup?.get('password'); }
}
