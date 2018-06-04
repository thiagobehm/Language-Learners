import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-perfil-proprietario',
  templateUrl: 'perfil-proprietario.html',
})
export class PerfilProprietarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilProprietarioPage');
  }

}
