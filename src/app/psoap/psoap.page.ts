import { Component, OnInit } from '@angular/core';
import { SoapService } from '../soap.service';

const api_base_url = 'http://localhost/ws/server.php?wsdl';
@Component({
  selector: 'app-psoap',
  templateUrl: './psoap.page.html',
  styleUrls: ['./psoap.page.scss'],
  // providers: [SoapService],   sudah ditambahkan di app.module.ts
})

export class PsoapPage implements OnInit {
 param1 = '';
 param2 = '';

  constructor(public soapService: SoapService) { }

  ngOnInit() {
    this.getData2();
  }

  getData1() {
    const array_name = 'Bobi';

    this.soapService.post(api_base_url, 'getDataJson', {string0: array_name, string1: array_name, string2: array_name}).then(result => {
      const responData = JSON.parse(String(result));
      console.log(responData);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getData2() {
    this.soapService.post(api_base_url, 'postDataJson', {fStream: JSON.stringify(
      {
        param1: 'param 1',
        param2: 'param 2',
        data : {
          search : 'nipp',
          atas: '1',
          bawah: '10'
        }
      }
    )}).then(result => {
      const responData = JSON.parse(String(result));
      console.log(responData);
      console.log(responData['data']['param1']);
      this.param1 = responData['data']['param1'];
    })
    .catch(error => {
      console.log(error);
    });
  }

}
