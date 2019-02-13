import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Auth-Token': 'A1E-9rmhjp3FERSU2LbNKLuoxf1JcvDKgj'
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



  constructor(http: HttpClient) {
    this.http = http;
    this.volumeUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/Volume/values';
    this.qualityUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/quality/values';
    this.humidityUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/humidity/values';
    this.temperatureUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/temperature/values';
    this.cleaningUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/cleaning/values';
    this.trashUrl = 'http://things.ubidots.com/api/v1.6/devices/SmartBin/trash/values';

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

}
