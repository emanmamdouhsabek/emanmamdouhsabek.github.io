import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  constructor(private formBuilder: FormBuilder ,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { 
      this.title.setTitle('Login')
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;


      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }
    }
}
