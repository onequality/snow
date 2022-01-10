import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

import { GlobalService } from "../global.service";
import { InterfaceJob } from "../interfaceJob";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
})
export class Tab4Page {
  public listJobs: InterfaceJob;

  constructor(
    private global: GlobalService,
    private http: HttpClient,
    private printer: Printer
  ) {}

  ionViewWillEnter() {
    this.searchJobs();
  }

  async searchJobs() {
    let data: InterfaceJob;
    await this.getJobs().then((response: any) => (data = response));
    this.listJobs = data;
    console.log("this.listJobs", this.listJobs);
  }

  async getJobs(): Promise<any> {
    const data = await this.http
      .get(this.global.urlServer + "listJobs")
      .toPromise();
    return data;
  }

  print() {
    console.log(this.printer.isAvailable());
    this.printer.isAvailable().then(
      (onSuccess: any) => {
        let content = document.getElementById("printer").innerHTML;
        let options: PrintOptions = {
          name: "MyDocument",
          duplex: true,
          orientation: "portrait",
          monochrome: true,
        };
        this.printer.print(content, options).then(
          (value: any) => {
            console.log("value:", value);
          },
          (error) => {
            console.log("eror:", error);
          }
        );
      },
      (err) => {
        console.log("err:", err);
      }
    );
  }
}
