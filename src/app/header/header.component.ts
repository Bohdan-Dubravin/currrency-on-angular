import { Component, OnInit } from '@angular/core';
import { CurrenciesDataService } from '../services/currencies-fetch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currencies: any;
  todayDate = new Date().toString().slice(0, 15);
  usd = 0;
  eur = 0;

  constructor(private currenciesData: CurrenciesDataService) {
    currenciesData.getCurrencies().subscribe((data) => {
      this.currencies = data.rates;

      this.usd = (1 * this.currencies['UAH']) / this.currencies['USD'];
      this.eur = (1 * this.currencies['UAH']) / this.currencies['EUR'];
    });
  }

  ngOnInit(): void {}
}
