import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';
import { InstallmentsService } from 'src/app/services/installments.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  numberOfInstallment: Array<object>;
  isStepperLinear: boolean = true;
  submitted: boolean = false;
  changeSecurityCode: boolean = false;

  constructor(
    private fb: FormBuilder,
    public checkoutService: CheckoutService,
    public installmentsService: InstallmentsService
  ) { }

  ngOnInit() {
    this.createCheckoutForm();
    this.getNumbersOfInstallment();
    this.onValueChangesForm();
  }

  getNumbersOfInstallment() {
    this.installmentsService.getInstallments()
      .subscribe(res => {
          this.numberOfInstallment = res;
        }, error => {
          return;
        }
      );
  }

  createCheckoutForm() {
    this.checkoutForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      expirationCard: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      securityCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      numberOfInstallment: ['', [Validators.required]]
    });
  }

  get f() { return this.checkoutForm.controls; }
  get ft() { return this.checkoutForm; }

  onSubmitForm() {
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      return;
    }

    this.checkoutService.sendCheckoutCarrinho(this.checkoutForm.value)
      .subscribe(res => {
          console.log(res);
        }, error => {
          return;
        }
      );
  }

  onValueChangesForm(): void {
    this.checkoutForm.get('expirationCard').valueChanges.subscribe(val => {
      this.changeSecurityCode = false;
    });
    this.checkoutForm.get('numberOfInstallment').valueChanges.subscribe(val => {
      this.changeSecurityCode = false;
    });

    // CVV
    this.checkoutForm.get('securityCode').valueChanges.subscribe(val => {
      this.changeSecurityCode = true;
    });
  }
}
