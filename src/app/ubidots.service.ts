import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import {sms} from './sms'
import {Observable} from 'rxjs'

//Service to retrieve and send SMS to UBIDOTS API by liew khye chun

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Auth-Token': 'A1E-9rmhjp3FERSU2LbNKLuoxf1JcvDKgj'
  })
};

const httpOptionsSms = {
  headers: new HttpHeaders({

    'X-Auth-Token': 'A1E-HyJdi31GDWpzlxgSe3uULImFjAabjl',
    })
};

const httpOptionsBody = {
  body: ({
    'Value': '1'
  })
  
};

@Injectable({
  providedIn: 'root'
})
export class UbidotsService {
  http: any;
  headers: String;
  volumeUrl: String;
  qualityUrl: String;
  humidityUrl: String;
  temperatureUrl: String;
  cleaningUrl: String;
  trashUrl: String;
  testUrl: String;
  smsUrl: String;


  constructor(http: HttpClient) {
    this.http = http;
    this.volumeUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/Volume/values';
    this.qualityUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/quality/values';
    this.humidityUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/humidity/values';
    this.temperatureUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/temperature/values';
    this.cleaningUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/cleaning/values';
    this.trashUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/trash/values';
    this.testUrl = 'https://app.ubidots.com/ubi/datasources/#/detail/5c04def1c03f9739ac665e8b/variable/5c63ef63c03f97283d7899ff'
    this.smsUrl = 'http://things.ubidots.com/api/v1.6/variables/5c64f015c03f9737a965e547/values';

  }

  getVolumeValues() {
    return this.http.get(this.volumeUrl, httpOptions)
  }
  getQualityValues() {
    return this.http.get(this.qualityUrl, httpOptions)
  }
  getHumidityValues() {
    return this.http.get(this.humidityUrl, httpOptions)
  }
  getTemperatureValues() {
    return this.http.get(this.temperatureUrl, httpOptions)
  }
  getCleaningValues() {
    return this.http.get(this.cleaningUrl, httpOptions)
  }
  getTrashValues() {
    return this.http.get(this.trashUrl, httpOptions)
  }
  
  getSms(){
    return this.http.post(this.smsUrl, {"value": "1"},httpOptionsSms)
  }



}
