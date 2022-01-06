import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { OnInit } from '@angular/core';

import { GlobalService } from '../global.service';
import { InterfaceJob } from '../interfaceJob';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  public listJobs: InterfaceJob;
  
  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private global: GlobalService,
  ) {}

  ngOnInit() {
    this.searchJobs();
  }

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

  editJob($id: any){}

  async deleteJob($id: any, $date_job: string, $snow: string, $obs: string)
  {
    const alert = await this.alertController.create
    (
      {
        header: 'Delete this Job?',
        message: 'Job: ' + $id + ' <br><strong> ' + $date_job + ' - ' + $snow + '</strong> <br> ' + $obs,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah: any) => {
              console.log('Confirm Cancel: blah');
            }
          }, 
          {
            text: 'Yes, confirm Delete!',
            handler: (data: any) => {
              console.log('OK ---> Data -> ' + JSON.stringify(data));
              let postData = {
                id: $id,
              };
              this.http.put<InterfaceJob>
              (this.global.urlServer + 'deleteJob', postData).
              subscribe(data => {} );
              console.log(' apagou aqui mas nao deve ter atualizado');
            }
          }
        ]
      }
    );
    await alert.present();
    this.searchJobs();
    console.log('this.listJobs depois do delete await: ', this.listJobs);

  }
}
