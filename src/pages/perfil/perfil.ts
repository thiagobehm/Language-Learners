import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  model: Usuario;
  _imageViewerCtrl: any;

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private useuarioProvider: UsuarioProvider,
    private toast: ToastController,
    public imageViewerCtrl: ImageViewerController
	) {
  
    this._imageViewerCtrl = imageViewerCtrl;
    
    if (this.navParams.data.usuario) {
			this.model = this.navParams.data.usuario;
		} else {
			this.model = new Usuario();
		}
	}

  ionViewDidLoad() {  
  }

  presentImage(myImage) {    
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    //setTimeout(() => imageViewer.dismiss(), 1000);
   // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
}

export class Usuario{
  id: number;
  first_name: string;
  last_name: string;  
  avatar: any;
}
