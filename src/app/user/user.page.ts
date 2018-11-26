import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

export class UserPage implements OnInit {
  dataUser: any = [];
  data: any;

  constructor(public serviceCntrl: ServiceService, public loadingCntrl: LoadingController) { }

  ngOnInit() {
    this.listUser();
  }

  listUser1(){
    this.serviceCntrl.daftaruser().subscribe(data => {
      console.log(data);
      this.dataUser = data;
    });
  }

  async listUser() {
    const loading = await this.loadingCntrl.create({
      message: 'Please wait'
    });

    await loading.present();

     this.serviceCntrl.listUser().then((data) => {
      console.log(data);
      if (this.data) {
        for ( const a in data) {
          if (data[a]['id'] !== window.localStorage.getItem('id')) {
             this.dataUser.push(data[a]);
          }
        }
        console.log(this.dataUser);
      } else {
        this.dataUser = data;
      }
      loading.dismiss();
    }, (err) => {
      loading.dismiss();
      console.log('error');
    });
    }

}
