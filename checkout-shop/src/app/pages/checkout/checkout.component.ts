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
  isLinear = true;

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
    this.carrinhoForm = this.fb.group({
      cardNumber: [''],
      fullName: [''],
      expirationMonth: [''],
      securityCode: ['']
    });
  }

  onSubmit() {
    console.log(this.carrinhoForm.value.username);
  }
}
