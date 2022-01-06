import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from '../global.service';
import { InterfaceJob } from '../interfaceJob';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public listJobs: InterfaceJob;
  
  constructor(
    private global: GlobalService,
    private http: HttpClient,
  ) {}

  ionViewWillEnter() 
  {
    this.searchJobs();
  }
  
  async searchJobs()
  {
    let data: InterfaceJob;
    await this.getJobs().
      then((response: any) => data = response);
    this.listJobs = data;
    console.log('this.listJobs', this.listJobs);
  }

  async getJobs(): Promise<any> {
    const data = await this.http.get(this.global.urlServer + 'listJobs').toPromise();
    return data;
  }

}
