import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URL = environment.apiUrl;
  loadings: any;

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    public http: HttpClient,
    public toasCntrl: ToastController,
    public router: Router
    ) { }

  async presentAlert(_hdr, _msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: _hdr,
      message: _msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentLoading() {
    this.loadings = await this.loadingController.create({
      message: 'Loading content...'
      // duration: 1000
    });
    return await this.loadings.present();
  }

  async presentProses() {
    this.loadings = await this.loadingController.create({
      message: 'Proses data...'
      // duration: 1000
    });
    return await this.loadings.present();
  }

  async closedLoading(){
    this.loadings.dismiss();
  }

  async alertLogout() {
    const alert = await this.alertController.create({
      header: 'Logout!',
      message: 'Message <strong>Are you sure to logout?</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            // localStorage.removeItem('id');
            localStorage.clear();
            this.router.navigate(['/login']);
            
          }
        }
      ]
    });

    await alert.present();
  }


  async presentToast(_msg) {
    const toast = await this.toasCntrl.create({
      message: _msg,
      duration: 2000
    });
    toast.present();
  }

  login(dataInput) {
    console.log('sini');
    return new Promise(resolve => {
      this.http.post(this.API_URL + 'login.php', dataInput).subscribe(data => {
          resolve(data);
      }, err => {
          console.log(err);
      });
   });
  }

  register(dataInput) {
    return new Promise(resolve => {
       this.http.post(this.API_URL + 'register.php', dataInput).subscribe(data => {
           resolve(data);
       }, err => {
           console.log(err);
       });
    });
  }

  listUser() {
    return new Promise(resolve => {
        this.http.get(this.API_URL + 'list_user.php').subscribe(data => {
            resolve(data);            
        }, err => {
            console.log(err);
        });
    });
 }

 daftaruser() {
  return this.http.get(this.API_URL + 'list_user.php');
 }

}
