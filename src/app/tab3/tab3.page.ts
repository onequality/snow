import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public jobs: any = [
    {
      
        date_job_string: '2022-01-01',
        snow: 11,
        icemelt_h:  14,
        icemelt_i: 15,
        plaw_h:  16,
        plaw_i:  17,
        shoviling_h: 12,
        shoviling_i: 13,
        obs:  'obs1'
    },
      {
        date_job_string: '2022-02-01',
        snow: 22,
        icemelt_h:  24,
        icemelt_i: 25,
        plaw_h:  26,
        plaw_i:  27,
        shoviling_h: 22,
        shoviling_i: 23,
        obs:  'obs1'
      },
      {
        date_job_string: '2022-03-01',
        snow: 33,
        icemelt_h:  34,
        icemelt_i: 35,
        plaw_h:  36,
        plaw_i:  37,
        shoviling_h: 32,
        shoviling_i: 33,
        obs:  'obs1'
      },
      {
        date_job_string: '2022-04-04',
        snow: 44,
        icemelt_h:  44,
        icemelt_i: 45,
        plaw_h:  46,
        plaw_i:  47,
        shoviling_h: 42,
        shoviling_i: 43,
        obs:  'obs1'
      }
    ];
  
  constructor() {}

}
