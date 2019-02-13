import { Component, OnInit } from '@angular/core';
import { UbidotsService } from '../ubidots.service'

@Component({
  selector: 'app-cleaner',
  templateUrl: './cleaner.component.html',
  styleUrls: ['./cleaner.component.css']
})
export class CleanerComponent implements OnInit {
  volumes = [];

  topArray = this.volumes[0];


  constructor(private ubidotsService: UbidotsService) { }

  
  ngOnInit() {
    this.getVolume()
    this.getCleaning()
    this.getHumidity()
    this.getQuality()
    this.getTemperature()
    this.getTrash()
    console.log(this.topArray)
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
}
