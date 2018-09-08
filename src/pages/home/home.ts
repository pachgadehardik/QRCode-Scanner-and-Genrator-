import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LinkyModule } from 'angular-linky';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qrData=null;
  createdCode=null;
  scannedCode=null;
  //codex=null;
  constructor(private barcodeScanner: BarcodeScanner) {}

  createCode(){

    this.createdCode=this.qrData;
    console.log('created code is '+this.createdCode);
    
}

scanCode(){
  this.barcodeScanner.scan().then(barcodeData=> {
    this.scannedCode=barcodeData.text;
    console.log('scanned code is'+this.scannedCode);
  }, (err)=>{
    console.log('error:',err);
  });
}
}
