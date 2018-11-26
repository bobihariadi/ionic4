import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { isError } from 'util';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  input = {username: '', fullname: '', email: '', password: '', repassword: ''};

  constructor(
    public serviceCtrl: ServiceService,
    public loadingCntrl: LoadingController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async register() {
    var isError = false;
    var label = '';

    if(!this.input.username){
       isError = true;
       label = 'Username harus diisi';
    } else if (!this.input.fullname){
      isError = true;
      label = 'Fullname harus diisi';
    } else if (!this.input.email){
      isError = true;
      label = 'Email harus diisi';
    } else if (!this.input.password){
      isError = true;
      label = 'Password harus diisi';
    } else if (!this.input.repassword){
      isError = true;
      label = 'Repassword harus diisi';
    } else if (this.input.password !=  this.input.repassword){
      isError = true;
      label = 'Password tidak sama';
    }

    if (isError){
      this.serviceCtrl.presentToast(label);
    } else {
      const loadings = await this.loadingCntrl.create({
        message: 'Please wait'
      });
      await loadings.present();

      this.serviceCtrl.register(this.input).then((data) => {
        loadings.dismiss();
        this.serviceCtrl.presentAlert('Success', 'Anda Berhasil melakukan registrasi');
        this.router.navigate(['/login']);
      }, (err) => {
        loadings.dismiss();
        this.serviceCtrl.presentAlert('Failed', 'Anda Gagal melakukan registrasi');
      });

    }


  }

}
