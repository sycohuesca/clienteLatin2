import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.showAlert();
    });


  }


  showAlert() {
    let res: boolean = true;
    let alert = this.alertCtrl.create({
      title: 'Recordatoriao',
      subTitle: 'Bienvendio a nuetsra aplicacion!',

      buttons: ['OK']
    });
    alert.addInput({
      type: 'checkbox',
      label: 'No volver a ver este mensaje',
      value: 'si',
      checked: res
    });
    alert.present();
  }



}
