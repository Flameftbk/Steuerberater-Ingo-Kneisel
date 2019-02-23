import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public popUpViewed = false;

  constructor(private navCtrl: NavController, private toast: ToastController) {}

  ionViewWillEnter() {
    if (this.popUpViewed === false) {
      setTimeout(() => {
        this.YourXpertToast();
      }, 500);
    } else {}
  }

  ionViewWillLeave() {
    this.toast.dismiss();
  }

  goToTeam() {

    this.navCtrl.navigateForward(['/team']);
  }

  goToYourXpert() {
    this.popUpViewed = true;
    window.open('https://www.yourxpert.de/xpert/steuerberater/ingo.kneisel', '_blank');
  }

  goToPartners() {
    this.navCtrl.navigateForward(['/partners']);
  }

  async YourXpertToast() {
    const toast = await this.toast.create({
      message: 'Neu: Schnelle telefonische Beratung über YourXpert!',
      showCloseButton: true,
      position: 'top',
      closeButtonText: 'Ansehen',
      mode: 'ios',
      animated: true,
      color: 'primary',
      duration: 8500
    });
    toast.present();

    const dismiss = await toast.onDidDismiss();
      if (dismiss.role === 'cancel') {
        window.open('https://www.yourxpert.de/xpert/steuerberater/ingo.kneisel', '_blank');
        this.popUpViewed = true;
      }
  }
}
