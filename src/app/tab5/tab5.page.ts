import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToDatenschutz() {
    this.navCtrl.navigateForward(['/datenschutz']);
  }

  goToImpressum() {
    this.navCtrl.navigateForward(['/impressum']);
  }

}
