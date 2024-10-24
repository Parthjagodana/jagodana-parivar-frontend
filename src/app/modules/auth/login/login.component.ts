import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  phoneNumber: string = '';
  verificationCode: string = '';
  verificationId: any; // Store the verification ID

  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phone_no: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
    });
  }

  getErrorPhone() {
    return this.loginForm.get('phone_no')?.hasError('required')
      ? 'ફોન નંબર જરૂરી છે'
      : this.loginForm.get('phone_no')?.hasError('pattern')
      ? 'કૃપા કરીને માન્ય ફોન નંબર દાખલ કરો'
      : 'કૃપા કરીને માન્ય ફોન નંબર દાખલ કરો';
  }

  restrictZero(e: any) {
    if (e.target.value.length === 0 && e.key == '0') {
      e.preventDefault();
    }
  }

  onKeyPress(e: any) {
    if (e.which !== 0 && (e.which < 48 || e.which > 57)) {
      e.preventDefault();
    }
  }

  onPaste(e: any) {
    e.preventDefault();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    // Create a new RecaptchaVerifier

    // this.authService
    //   .loginWithPhone('+91' + this.loginForm.value.phone_no)
    //   .then((confirmationResult) => {
    //     // SMS sent. Prompt user to enter the code from the message
    //     this.verificationId = confirmationResult.verificationId;
    //     localStorage.setItem(
    //       'verificationId',
    //       confirmationResult.verificationId
    //     );
    //     localStorage.setItem('phone_no', this.loginForm.value.phone_no);

    //     this.snackService.openSnackBar(
    //       'નોંધાયેલ ફોન નંબર પર સફળતાપૂર્વક OTP મોકલવામાં આવ્યો.',
    //       ''
    //     );
    //     this.router.navigate(['/verify-otp']);
    //     this.loading = false;
    //   })
    //   .catch((error) => {
    //     console.error('Error during login:', error);
    //   });

    this.authService
      .login(this.loginForm.value).subscribe((response: any) => {
        if (response.status !== 'success') {
          this.snackService.openSnackBarError(response.message);
          this.loading = false;
        } else {
          this.snackService.openSnackBar(response.message);
          console.log('response', response);
          this.router.navigate(['/auth/verify-otp']);
          localStorage.setItem('sms_id', response.data.smsId);
          localStorage.setItem('phone_no', this.loginForm.value.phone_no);
        }
      });
  }
}
