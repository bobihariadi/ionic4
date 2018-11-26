import { Component, OnInit, AfterViewInit, SkipSelf } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  fullname = localStorage.getItem('id');
  item = {judul: 'judulnya', pesan: 'pesannya'};
  constructor(public serviceCntrl: ServiceService, public router: Router, public navCntrl: NavController) { }

  ngOnInit() {
    console.log(localStorage.getItem('id'));
    // if (localStorage.getItem('id') === null) {
    //   this.router.navigate(['/login']);
    // }
  }

  ngAfterViewInit() {
    // console.log(localStorage.getItem('id'));
    if (localStorage.getItem('id') === null) {
      this.router.navigate(['/login']);
    }
  }

  goTo(pageLink) {
    this.router.navigate(['/' + pageLink]);
    // this.navCntrl.push(pageLink);
  }

  goToInbox() {
    // di tujuan harus ditambahkan ActivatedRoute
    this.router.navigate(['/inbox', this.item]);
  }

  logout() { 
    this.serviceCntrl.alertLogout();
  }
}
