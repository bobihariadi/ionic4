import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  items: any;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.items = data;
    });
  }

}
