import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { SnackBarService } from '../../../shared/services/snack-bar.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent {
  public otp: string = '';
  public config = {
    length: 6,
    inputClass: 'otp-input',
    allowNumbersOnly: true,
    isPasswordInput: false,
    inputStyles: {
      width: '33px',
      height: '35px',
    },
  };
  public timer: number = 60;
  public error: any;
  public loading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackService: SnackBarService,
  ) {}

  ngOnInit(): void {
    this.startTimer();
  }

  public startTimer() {
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
        // Resend OTP logic can be triggered here
      }
    }, 1000);
  }

  public handleOtpChange(otp: string) {
    this.otp = otp;
  }

  public resendOtp() {
    this.loading = true;
    const phoneNo = localStorage.getItem('phone_no')!;
    if (phoneNo == null) {
      this.router.navigate(['/auth/login']);
    }
    
    this.authService.login({phone_no: phoneNo}).subscribe((response) => {
      this.loading = false;
      if (response.status !== "success") {
        this.snackService.openSnackBarError(response.message);
      } else {
        this.timer = 60;
        this.startTimer();
        this.snackService.openSnackBar(response.message);
        localStorage.setItem('sms_id', response.data.smsId);
      }
    })
  }

  public submitOtp() {
    if (this.otp.length === 6) {
      this.loading = true;
      this.authService.verifyOtp({smsId: localStorage.getItem("sms_id"), otp: this.otp}).subscribe((response) => {
        this.loading = false;
        if (response.status !== "success") {
          this.snackService.openSnackBarError(response.message);
        } else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          ['sms_id', 'phone_no'].forEach((item) => {
            localStorage.removeItem(item);
          })
          this.snackService.openSnackBar(response.message);
          this.router.navigate(['/app']);
        }
      })

    } else {
      this.error = 'કૃપા કરીને માન્ય OTP દાખલ કરો.';
    }
  }
}
