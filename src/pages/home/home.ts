import { Component,ViewChild } from '@angular/core';
import { NavController,NavParams, ToastController,InfiniteScroll } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

import { PerfilPage } from '../perfil/perfil';

//import axios from 'axios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios: any[];
  page: number;

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(
    public navCtrl: NavController,
		public navParams: NavParams,
		private usuarioProvider: UsuarioProvider,
		private toast: ToastController
  ) {

  }

  ionViewDidLoad(){
    this.usuarios = [];
    this.page = 1;   
    this.infiniteScroll.enable(true);   
    this.getAllUsers(this.page);	
  }

  doRefresh(refresher) {          
    this.usuarioProvider.getAll(this.page);
    setTimeout(() => {    
      refresher.complete();
    }, 2000);
  }


  getAllUsers(page: number) {
		this.usuarioProvider.getAll(page)
			.then((result: any) => {
				result.data.map(user => {
					this.usuarios.push(user);
				});

				if (this.infiniteScroll) {
					this.infiniteScroll.complete();
					if (this.usuarios.length == result.total) {
						this.infiniteScroll.enable(false);
					}
				}
			})
			.catch((error: any) => {
				this.toast.create({
					message: 'Erro ao listar usuários',
					duration: 3000
				}).present();
			});
  }
  
  getUsers() {
		setTimeout(() => {
			this.page += 1;
			this.getAllUsers(this.page);
		}, 500);
	}

  // Funciona com outra URL
  /*
  async carregaUsuarios(){

      const url = "https://randomuser.me/api/?results=1000&nat=br";
        
      try{
        let response = await axios.get(url);
        
        this.usuarios = response.data.results;

      }catch(e){   
        console.log("Erro ao carregar a lista.");
      }   
  }
*/

 
  openUser(id: number) {
  	this.usuarioProvider.get(id)
			.then((result: any) => {    
				this.navCtrl.push(PerfilPage, { usuario: result.data });
			})
			.catch((error: any) => {
				this.toast.create({
					message: 'Erro ao recuperar usuário',
					duration: 3000
				}).present();
			});
  }
  
  openEditUser(id: number, slidingItem) {
		this.usuarioProvider.get(id)
			.then((result: any) => {      
			//	slidingItem.close();
				this.navCtrl.push(PerfilPage, { usuario: result.data });
			})
			.catch((error: any) => {
				this.toast.create({
					message: 'Erro ao editar usuário',
					duration: 3000
				}).present();
			});
	}

}
