import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';

const KEY_RATE = 'rate';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public getRate() {
    var rate = StorageService.load(KEY_RATE);
    if (!rate) {
      return this.http
        .get<number>(`https://blockchain.info/tobtc?currency=USD&value=1`)
        .pipe(tap((rate) => StorageService.store(KEY_RATE, rate)));
    }
    return of(rate);
  }

  public getStatistics(type: string) {
    let statistics = StorageService.load(type);
    if (!statistics) {
      return this.http
        .get(
          `https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`
        )
        .pipe(tap((statistics) => StorageService.store(type, statistics)));
    }
    return of(statistics);
  }
  // async getStatistics(type: string) {
  //   let statistics = StorageService.load(type);
  //   if (!statistics) {
  //     const res = await axios.get(
  //       `https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`
  //     );
  //     statistics = res.data;
  //     StorageService.store(type, statistics);
  //   }
  //   return statistics;
  // }
}
