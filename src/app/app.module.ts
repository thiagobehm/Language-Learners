import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicImageViewerModule } from 'ionic-img-viewer';


// Paginas
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { PerfilPage } from '../pages/perfil/perfil';
import { ChatPage } from '../pages/chat/chat';
import { PerfilProprietarioPage } from '../pages/perfil-proprietario/perfil-proprietario';
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,      
    TabsPage,
    HomePage,
    ConfiguracaoPage,
    PerfilPage,
    ChatPage,
    PerfilProprietarioPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,   
    TabsPage,
    HomePage,
    ConfiguracaoPage,
    PerfilPage,
    ChatPage,
    PerfilProprietarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
    
  ]
})
export class AppModule {}
