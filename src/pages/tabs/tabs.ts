import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { PerfilProprietarioPage } from '../perfil-proprietario/perfil-proprietario';
import { ConfiguracaoPage } from '../configuracao/configuracao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatPage;
  tab3Root = PerfilProprietarioPage;
  tab4Root = ConfiguracaoPage;
  
  constructor(
    public navCtrl: NavController
  ) {
    
  }


}
