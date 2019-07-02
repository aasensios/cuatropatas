import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

// Custom validator to validate that password and confirm password fields match.
// import { MustMatch } from 'src/app/services/must-match.validator';
// import { first } from 'rxjs/operators';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {

  public user: User;
  submitted = false;
  private error = '';

  constructor(
    private authService: AuthService,
  ) { }

  /**
   * Log in an existing user, storing the access token and the refresh token
   * from the API response in web browser's local storage.
   */
  login() {
    this.authService.getToken(this.user)
      .subscribe(
        // Success
        response => {
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('refresh_token', response.refresh_token);
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          // Feedback to the user -- TODO: redirect to the home page
          this.authService.getUser()
            .subscribe(
              response => {
                alert(`Welcome ${response.name}`);
              }
            );
        }
      );
  }

  ngOnInit() {
    this.user = new User();
  }

}
