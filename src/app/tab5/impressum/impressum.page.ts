import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.page.html',
  styleUrls: ['./impressum.page.scss'],
})
export class ImpressumPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack(['/tabs/tab5']);
  }

  goToMySite() {
    window.location.href = 'https://www.bjoern-kneisel.de';
  }

  sendEmailToMe() {
    window.location.href = 'mailto:info@bjoern-kneisel.de';
  }

}
