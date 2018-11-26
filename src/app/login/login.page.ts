import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { load } from '@angular/core/src/render3';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   input = {username: '', password: ''};
  alertController: any;
  header = '';
  pesan = '';

  constructor(
    public serviceCntrl: ServiceService,
    private router: Router,
    public loadingCntrl: LoadingController
    ) { }

  ngOnInit() {
  }

  async login_b() {
    const loading = await this.loadingCntrl.create({
      message: 'Please wait..'
    });

    await loading.present();

    this.serviceCntrl.login(this.input).then((data) => {
      console.log(data);
      if(data){
        localStorage.setItem('id',data[0]['id']);
        localStorage.setItem('username',data[0]['username']);
        localStorage.setItem('fullname',data[0]['fullname']);
        localStorage.setItem('email',data[0]['email']);
        localStorage.setItem('position',data[0]['position']);

        // this.serviceCntrl.presentAlert('Success', 'Anda Berhasil melakukan registrasi');
        loading.dismiss();
        this.router.navigate(['/home']);
      } else {
        loading.dismiss();
        this.serviceCntrl.presentAlert('Failed', 'Anda Gagal login');
      }
    }, (err) => {
      loading.dismiss();
      this.serviceCntrl.presentAlert('Failed', 'Anda error');
    });
  }

  register_b(){
    this.router.navigate(['/register']);
  }

}
