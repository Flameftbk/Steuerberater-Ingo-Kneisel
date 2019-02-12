import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.page.html',
  styleUrls: ['./datenschutz.page.scss'],
})
export class DatenschutzPage implements OnInit {

  constructor(private NacCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.NacCtrl.navigateBack(['/tabs/tab5']);
  }

}
