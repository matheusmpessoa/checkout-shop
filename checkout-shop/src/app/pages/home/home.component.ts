import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

export interface CheckoutElements {
  id: number;
  cardNumber: string;
  fullName: string;
  expirationCard: string;
  securityCode: string;
  numberOfInstallment: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'cardNumber', 'expirationCard', 'securityCode', 'numberOfInstallment'];
  dataSource: CheckoutElements[];

  constructor(
    public checkoutService: CheckoutService
  ) { }

  ngOnInit() {
    this.getCheckouts();
  }

  getCheckouts() {
    this.checkoutService.getCheckouts()
      .subscribe(res => {
          this.dataSource = res;
          console.log(this.dataSource);
        }, error => {
          return;
        }
      );
  }

}
