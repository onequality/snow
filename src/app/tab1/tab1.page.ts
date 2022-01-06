import { Component, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

import { GlobalService } from '../global.service';
import { InterfaceJob } from '../interfaceJob';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private jobs: InterfaceJob;
 
  public date_job: Date = new Date();
  public snow: number;
  public shoviling_h: number;
  public icemelt_h: number;
  public plaw_h: number;
  public shoviling_i: number;
  public icemelt_i: number;
  public plaw_i: number;
  public obs: string;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private global: GlobalService,
  ) {
    this.showDate();
  }

  showDate() 
  {
    console.log
    (
      ' veja o update da data aqui e agora: ', 
      'Date: ', this.date_job,
      'Snow: ', this.snow,
      'Ice melt H: ', this.icemelt_h,
      '" I: ', this.icemelt_i,
      'Plaw H: ', this.plaw_h,
      ' " I: ', this.plaw_i,
      'Shoviling H: ', this.shoviling_h,
      ' " I: ', this.shoviling_i,
      'Obs: ', this.obs
    );
    // still inserted on database
  }

  insertJob() 
  {
    let postData = 
    {      
      date_job: this.date_job,
      snow: this.snow,
      icemelt_h: this.icemelt_h,
      icemelt_i: this.icemelt_i,
      plaw_h: this.plaw_h,
      plaw_i: this.plaw_i,
      shoviling_h: this.shoviling_h,
      shoviling_i: this.shoviling_i,
      obs: this.obs,
    };
    console.log(postData);
    this.http.put(this.global.urlServer + 'insertJob', postData).subscribe((data: any) => {
      console.log('Send Work Order was a success!', data);
      this.global.presentToastGeneric('Send Work Order was a success!', 'success');
    }, error => {
      this.global.presentToastGeneric('Error when to send work order, try again!', 'error');
      console.log(error);
    });
  
  }

}
