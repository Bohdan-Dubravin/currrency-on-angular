import { Component, OnInit } from '@angular/core';
import { CurrenciesDataService } from '../services/currencies-fetch.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  firstAmount: any = 1;
  secondAmount: any = 1;
  currencies: any;
  allRates: string[] = [];
  select1 = 'USD';
  select2 = 'UAH';

  firstCurrecyChange() {
    this.secondAmount = (
      (this.firstAmount * this.currencies[this.select2]) /
      this.currencies[this.select1]
    ).toFixed(2);
  }
  secondCurrecyChange() {
    this.firstAmount = (
      (this.secondAmount * this.currencies[this.select1]) /
      this.currencies[this.select2]
    ).toFixed(2);
  }

  chageCurrencyOne(value: string) {
    this.select1 = value;
    this.secondAmount = (
      (this.firstAmount * this.currencies[this.select2]) /
      this.currencies[this.select1]
    ).toFixed(2);
  }

  chageCurrencyTwo(value: string) {
    this.select2 = value;
    this.firstAmount = (
      (this.secondAmount * this.currencies[this.select1]) /
      this.currencies[this.select2]
    ).toFixed(2);
  }

  constructor(private currenciesData: CurrenciesDataService) {
    currenciesData.getCurrencies().subscribe((data) => {
      this.currencies = data.rates;
      this.allRates = Object.keys(this.currencies);

      this.secondAmount = (
        (this.firstAmount * this.currencies[this.select2]) /
        this.currencies[this.select1]
      ).toFixed(2);
    });
  }

  ngOnInit(): void {}
}
