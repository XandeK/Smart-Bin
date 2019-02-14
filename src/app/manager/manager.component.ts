import { Component, OnInit } from '@angular/core';
import { UbidotsService } from '../ubidots.service';
import { sms } from '../sms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
//UI and component done by Khye Chun

export class ManagerComponent implements OnInit {
  sms:any;

  constructor( private ubidotsService: UbidotsService ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.ubidotsService.getSms().subscribe(sms => {
      this.sms = sms
    })
  }

}
