import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { faBug, faThumbsUp } from '@fortawesome/pro-solid-svg-icons';
import { blockedDomains } from '../data/blocked-domains';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit, OnDestroy {

  public form!: UntypedFormGroup;
  public isValidFormSubmitted!: boolean;
  public error: any;

  faBug = faBug;
  faSuccess = faThumbsUp;

  private subscriptionNewsletter!: Subscription;

  constructor(
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.subscriptionNewsletter) {
      this.subscriptionNewsletter.unsubscribe();
    }
  }

  initForm(): void {
    this.form = this.fb.group(
      {
        email: ['',
          [Validators.required]
        ],
        privacy: [false,
          [Validators.requiredTrue]
        ],
      }
    );
  }

  submitForm(): void {
    this.isValidFormSubmitted = false;
    if (this.form.invalid) {
      return;
    }

    const browserLanguage = document.documentElement.lang;
    let lang = 'en';
    if ('de' === browserLanguage) {
      lang = 'de';
    }
    // @ts-ignore
    const mail = this.form.get('email').value.split('@');
    const domain = mail[1];

    const isBanned = blockedDomains.includes(domain);

    if (isBanned) {
      this.error = {message: 'Error! Please try again later.'};
      return;
    }


    // @ts-ignore
    this.subscriptionNewsletter = this.apiService.newsletterRegistration(this.form.get('email').value, lang).subscribe(
      () => {},
      (err: HttpErrorResponse) => {
        this.error = err.error;
      },
      () => {
        this.isValidFormSubmitted = true;
        this.form.reset();
      }
    )
  }

  get email(): any {
    return this.form.get('email');
  }

  get privacy(): any {
    return this.form.get('privacy');
  }

}
