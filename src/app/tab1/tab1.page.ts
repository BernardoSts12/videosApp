import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  handlerMessage = '';
  roleMessage = '';


  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async alertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message:'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelou')
          },
        },
        {
          text: 'SIM',
          role: 'confirm',
          handler: () => {
            this.presentToast()
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado ao favoritos',
      duration: 1500,
      position: 'bottom',
      color:'success',
      icon: 'globe',
    });

    await toast.present();
  }
}


