import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public userData: any;
  public urlServer = 'http://oneqservices.com/api/';
  public urlServerJSON = "assets/langs/";
  public version = '1.0-Snow1Q-IPhone'
  public name = 'oneqservices.com';
  public company = 'One Quality Inc';
  public published = '01/06/2022 15:00 PM US';
  public website = 'oneqservices.com';
  public developer = "Dami Group Inc";
  public copyright = "OneQ and Snow1Q is trademark of the One Quality Inc";
  public photo = '';
  public language = 'enus';

  constructor(

    private http: HttpClient,
    private router: Router,
    private toastController: ToastController) { }
  

  presentToastGeneric(strMsg: string, strColor: string) {
    if (strColor == 'Red') {
      this.showToastError('Error', strMsg);
    } else if (strColor == 'Green') {
      this.showToastSuccess('Success', strMsg);
    } else if (strColor == 'Yellow') {
      this.showToastWarning('Error', strMsg);
    } else
      this.showToastSuccess('Success', strMsg);
  }

  getUser() {
    if (typeof localStorage.postLogin === 'undefined') {
      return false
    } else {
      return JSON.parse(localStorage.getItem('postLogin'));
    }
  }

  saveUserTrust($postData: any) {
    localStorage.setItem('postLoginTrust', JSON.stringify($postData));
  }

  saveUser($postData: any) {
    localStorage.setItem('postLogin', JSON.stringify($postData));
  }

  saveBooking(postData: any) {
    localStorage.setItem('postBooking', JSON.stringify(postData));
    console.log('olha aqui gravando:', postData)
  }

  saveListTodayOrders(postData: any) {
    localStorage.setItem('postListTodayOrders', JSON.stringify(postData));
    console.log('olha aqui gravando:', postData)
  }

  getListTodayOrders() {
    return JSON.parse(localStorage.getItem('postListTodayOrders'));
  }

  getBooking() {
    console.log(JSON.parse(localStorage.getItem('postBooking')));
    return JSON.parse(localStorage.getItem('postBooking'));
  }

  showToastSuccess(strTipo, strMsg: string) {
    this.toastController.create({
      header: strTipo,
      message: strMsg,
      position: 'bottom',
      cssClass: 'toast-custom-class-success',
      buttons: [
        {
          side: 'end',
          icon: 'checkmark-circle-outline',
          text: '',
          handler: () => {
            console.log(strMsg, 'Clicou aqui');
          }

        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  showToastWarning(strTipo: string, strMsg: string) {
    this.toastController.create({
      header: strTipo,
      message: strMsg,
      position: 'bottom',
      cssClass: 'toast-custom-class-warning',
      buttons: [
        {
          side: 'end',
          icon: 'warning',
          text: strMsg,
          handler: () => {
            console.log(strMsg, 'Clicou aqui');
          }
        }, {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

  showToastError(strTipo: string, strMsg: string) {
    this.toastController.create({
      header: strTipo,
      message: strMsg,
      position: 'bottom',
      cssClass: ' toast-custom-class-error',
      buttons: [
        {
          side: 'end',
          icon: 'stop',
          text: strMsg,
          handler: () => {
            console.log(strMsg, 'Clicou aqui');
          }
        }, {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Close clicked');
          }
        }
      ]
    }).then((obj) => {
      obj.present();
    });
  }

}