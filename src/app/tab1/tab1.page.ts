import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IFilmes } from '../models/iFilmes.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  titulo = 'Vídeos App';
  listaFilmes: IFilmes[] = [
    {
      nome: 'The Walking Dead',
      lancamento: '12/10/2001',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xf9wuDcqlUPWABZNeDKPbZUjWx0.jpg',
      generos: ['Ação','Terror']
    },
    {
      nome: 'Adão Negro',
      lancamento: '12/10/2001',
      duracao: '1h 47m',
      classificacao: 80,
      cartaz : 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg',
      generos: ['Ação','Fantasia','Aventura', 'Ficção']
    }
  ];

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


