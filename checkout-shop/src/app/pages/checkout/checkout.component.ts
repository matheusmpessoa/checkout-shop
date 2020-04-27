import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Installments {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  carrinhoForm: FormGroup;
  isStepperLinear: boolean = true;
  submitted: boolean = false;
  changeSecurityCode: boolean = false;

  numberOfInstallment: Installments[] = [
    { value: '12', viewValue: '12x R$1.000,00 sem juros' },
    { value: '10', viewValue: '10x R$1.200,00 sem juros' },
    { value: '6', viewValue: '6x R$2.000,00 sem juros' },
    { value: '2', viewValue: '2x R$6.000,00 sem juros' },
    { value: '1', viewValue: 'A vista' }
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createCarrinhoForm();
    this.onChanges();
  }

  createCarrinhoForm() {
    this.carrinhoForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(20)]],
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      expirationMonth: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      securityCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      numberOfInstallment: ['', [Validators.required]]
    });
  }

  get f() { return this.carrinhoForm.controls; }
  get ft() { return this.carrinhoForm; }

  onSubmit() {
    this.submitted = true;
    console.log(this.carrinhoForm);
    console.log(this.carrinhoForm.controls);
    console.log(this.carrinhoForm.value);

    if (this.carrinhoForm.invalid) {
      return;
    }
  }

  somethingChanged() {
    this.changeSecurityCode = true;
    console.log('mudou');
  }

  onChanges(): void {
    this.carrinhoForm.get('securityCode').valueChanges.subscribe(val => {
      this.changeSecurityCode = true;
    });

    this.carrinhoForm.get('numberOfInstallment').valueChanges.subscribe(val => {
      this.changeSecurityCode = false;
    });
  }
}
