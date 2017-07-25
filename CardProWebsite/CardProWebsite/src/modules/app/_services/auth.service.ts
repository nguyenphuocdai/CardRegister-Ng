import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
  private email: string;
  auth0 = new auth0.WebAuth({
    clientID: 'DnJiqWoXCwNTJsM7sEOSjYUPBzMvYLho',
    domain: 'nguyenphuocdai.auth0.com',
    responseType: 'token id_token',
    audience: 'https://nguyenphuocdai.auth0.com/userinfo',
    redirectUri: 'http://localhost:61801',      
    scope: 'openid email'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

    // xử lý bằng parseHash trong auth0.js
  public handleAuthentication(): void {
      this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
              window.location.hash = '';
              this.setSession(authResult);
              this.router.navigate(['']);
              this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
                  if (user) {
                      this.email = user.email;
                  }
                  else if (err) {
                      this.router.navigate(['/home']);
                      console.log(err);
                  }
              });
          } else if (err) {
              this.router.navigate(['/home']);
              console.log(err);
          }
      });
  }

  private setSession(authResult): void {
      // Set the time that the access token will expire at
      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token    ', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
      // Remove tokens and expiry time from localStorage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // Go back to the home route
      this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
      // Check whether the current time is past the
      // access token's expiry time
      const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
  }

  public userEmail(): string {
      return this.email;
  }
}