import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.page.html',
  styleUrls: ['./partners.page.scss'],
})
export class PartnersPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack(['/tabs/tab1']);
  }

  goToKammer() {
    window.location.href = 'https://www.steuerberaterkammer-westfalen-lippe.de/';
  }

  goToVerband() {
    window.location.href = 'http://www.stbv.de/';
  }

  goToDatev() {
    window.location.href = 'https://www.datev.de';
  }

  goToBMF() {
    window.location.href = 'https://www.bundesfinanzministerium.de';
  }

  goToBFH() {
    window.location.href = 'https://www.bundesfinanzhof.de/';
  }

  goToWPK() {
    window.location.href = 'https://www.wpk.de/';
  }

}
