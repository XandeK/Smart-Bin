import { Component, OnInit } from '@angular/core';
import { UbidotsService } from '../ubidots.service';
import { sms } from '../sms';

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.css']
})
export class CleanerComponent implements OnInit {
  volumes = [];

  lengthArray = this.volumes.length;
  newItem : sms;
  store: sms[] = [];
  sms : any []
  

  constructor(private ubidotsService: UbidotsService) { }

  
  ngOnInit() {
    this.getVolume()
    this.getCleaning()
    this.getHumidity()
    this.getQuality()
    this.getTemperature()
    this.getTrash()
    this.onSubmit()


  }

  getVolume() {
    this.ubidotsService.getVolumeValues().subscribe(response => {
      this.volumes = response.results;
      console.log(this.volumes)
    });
  }
  getQuality() {
    this.ubidotsService.getQualityValues().subscribe(response => {
      console.log(response);
    });
  }
  getHumidity() {
    this.ubidotsService.getHumidityValues().subscribe(response => {
      console.log(response);
    });
  }
  getTemperature() {
    this.ubidotsService.getTemperatureValues().subscribe(response => {
      console.log(response);
    });
  }
  getCleaning() {
    this.ubidotsService.getCleaningValues().subscribe(response => {
      console.log(response);
    });
  }
  getTrash() {
    this.ubidotsService.getTrashValues().subscribe(response => {
      console.log(response);
    });
  }

  onSubmit(){
    this.ubidotsService.getSms().subscribe(sms => {
      this.sms = sms
    })
  }
}
