import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as myGlobals from '../GlobalServices/Globals';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tabValue: boolean = true;
  registerForm: FormGroup;
  
  countries = ['USA', 'Canada', 'Uk']


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  onRegisterSubmit() {
    // alert(this.registerForm.value);
    //console.log(this.registerForm.value);
  }
  tabFunction(value) {
    if (value == 'BasicDetails') {
      this.tabValue = true;
    } else {
      this.tabValue = false;
    }

  }
  createForm() {
    this.registerForm = this.formBuilder.group({
      'companyname':
        [null, [Validators.required, Validators.minLength(4),
        Validators.maxLength(10)]],
      'RequesterName': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'Designation': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'OfficialEmailID': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(20),
      Validators.email]],
      'MobileNumber': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'PurposeOfservice': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'OrganisationType': [null],
      'PaidService': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'ProductionIPaddress': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'StagingIpAddress': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'FunctioanlSpocName': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'FunctioanlSpocEmailId': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(20), Validators.email]],
      'FunctioanlMobileNumber': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'TechSpocName': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'TechSpocEmailId': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'TechopsMobileNumber': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
    });
  }
  // [hidden]="!tabValue"
}