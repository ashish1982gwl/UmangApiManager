import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  lodingFlag :boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService) { }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      'email':
        [null, [Validators.required, Validators.minLength(4),
        Validators.maxLength(30), Validators.email]],
      'password':
        [null, [Validators.required, Validators.minLength(4),
        Validators.maxLength(30)]],
    });

  }

  submitLoginFrom() {
    this.lodingFlag=true;
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    this.loginService.getLogin(email, password)
      .subscribe(
        response => {
          this.lodingFlag=false;
          this.getResponseParser(response);
        },
        error => {
          this.lodingFlag=false;
          this.getErrorMessage();
        });

  }
  getResponseParser(resp) {
    //{"statusInfo":{"status":"F","errorDescription":"Invalid credentials","errorCode":127},"data":null}
    if (resp.statusInfo.status === 'f' || resp.statusInfo.status === 'F') {
      this.getWaringMessage("User id or password is incorrect");
      return;
    }
    if (resp.statusInfo.status === 's' || resp.statusInfo.status === 'S') {
      let successData = JSON.parse(resp.data);
      localStorage.setItem('access_token', successData.access_token);
      if (!successData.isPasswordUpdate) {
        this.goChangePasswordPage();
        //return;
      }
      if (successData.authorities === 'ADMIN') {
        this.router.navigate(['admin/dashboard/default']);
        return;
      }
    }
  }
  getSuccessMessage() {
    this.toastr.success('Hello world!', 'Success');
  }

  getErrorMessage() {
    this.toastr.error('Your request could not be processed at this time', 'Error');
  }
  getWaringMessage(msg) {
    this.toastr.warning(msg, 'Waring');
  }
  goHome() {
    this.router.navigate(['']);
  }

  goChangePasswordPage() {
    this.router.navigate(['changePassword']);
  }
}
