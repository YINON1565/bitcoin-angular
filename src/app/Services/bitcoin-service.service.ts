import { Injectable } from '@angular/core';

import { StorageService } from './storage-service'
import axios from "axios";

const KEY_RATE = 'rate'
const KEY_MARKET_PRICE = 'marketPrice'
const KEY_N_TRANSACTIONS = 'n-transactions'
const KEY_TRADE_VULUME = 'tradeVolume'
const KEY_AVG_BLOCK_SIZE = 'avgBlockSize'


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

async getRate() {
    var rate = StorageService.load(KEY_RATE)
    if (!rate) {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        rate = res.data
        StorageService.store(KEY_RATE, rate)
    }
    return rate
}

async getStatistics(type : string) {
  let statistics = StorageService.load(type)
  if (!statistics) {
    const res = await axios.get(`https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`)
    statistics = res.data
    StorageService.store(type, statistics)
  }
  return statistics
}

  constructor() { }
}
