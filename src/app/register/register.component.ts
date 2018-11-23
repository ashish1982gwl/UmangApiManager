import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as myGlobals from '../GlobalServices/Globals';
import { isError } from 'util';

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
        [null, [Validators.required, Validators.minLength(3),
        Validators.maxLength(30)]],
      'RequesterName': [null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(30)]],
      'Designation': [null],
      'OfficialEmailID': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(80),
      Validators.email]],
      'MobileNumber': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'PurposeOfservice': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(30)]],
      'OrganisationType': [null],
      /* 'PaidService': [null, [Validators.required, Validators.minLength(4),
       Validators.maxLength(10)]],
       'ProductionIPaddress': [null, [Validators.required, Validators.minLength(4),
       Validators.maxLength(10)]],
       'StagingIpAddress': [null, [Validators.required, Validators.minLength(4),
       Validators.maxLength(10)]],*/
      'FunctioanlSpocName': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'FunctioanlSpocEmailId': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(80), Validators.email]],
      'FunctioanlMobileNumber': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'TechSpocName': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
      'TechSpocEmailId': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(80)]],
      'TechopsMobileNumber': [null, [Validators.required, Validators.minLength(4),
      Validators.maxLength(10)]],
    });
  }
  emailDomainValidator(control: FormControl) {
    let email = control.value;
    if (email && email.indexOf("@") != -1) {
      return {
         isError: true 
        };
    }
    if (email && (email.indexOf(".com") != -1)||(email.indexOf(".in") != -1)) {
      return {
         isError: true 
        };
    }
    return null;
  }

  // [hidden]="!tabValue"
}