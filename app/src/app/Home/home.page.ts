import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';

@Component({
    selector: 'app-tab1',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
    constructor(public bluetoothle: BluetoothLE, public plt: Platform) {
        this.plt.ready().then((readySource) => {
            const params = {request: true, statusReceiver: true, restoreKey: 'bluetoothleplugin'};
            this.bluetoothle.initialize(params).subscribe(result => this.initBLE(result), error => this.handelError(error));
        });
    }

    ngOnInit(): void {
    }

    public initBLE(result) {
        if (result.status === 'enabled') {
            console.log('Info: BLE-Modem is ready!');
            this.startScan();
            this.initBeacon();
        } else {
            console.log('Error: BLE-Modem is offline!');
        }
    }

    public initBeacon() {
        const params = {request: true, restoreKey: 'bluetoothleplugin'};
        this.bluetoothle.initializePeripheral(params).subscribe(result => this.initHandleBeacon(result), error => this.handelError(error));
    }

    public initHandleBeacon(result) {
        if (result.status === 'enabled') {
            this.createService();
        } else {
            console.log('handle Beacon', result);
            // if (result.status === 'readRequested') {
            //
        }
    }

    public createService() {
        console.log('Creating Service');
        let params = {
            service: '1234', characteristics: [
                {
                    uuid: '4242', permissions: {
                        read: true, write: true,
                        // readEncryptionRequired: true, 
                        // writeEncryptionRequired: true, 
                    }, properties: {
                        read: true,
                        writeWithoutResponse: true,
                        write: true,
                        notify: true,
                        indicate: true,
                        // authenticatedSignedWrites: true,
                        // notifyEncryptionRequired: true,
                        // indicateEncryptionRequired: true, 
                    }
                }]
        };
        this.bluetoothle.addService(params).then(result => this.startAdvertising(result));
    }

    public startAdvertising(result) {
        console.log('Info Service Create: ' + JSON.stringify(result));
        this.advertise();
    }

    public advertise() {
        const params = {
            services: ['1234'], //iOS 
            service: '1234', //Android 
            name: 'COVID19-Radar'
        };
        this.bluetoothle.startAdvertising(params).then(res => console.log(res));
        setTimeout(() => this.advertise(), 5000);
    }

    public startScan() {
        let params = {'services': ['1234'], 'allowDuplicates': true,};
        this.bluetoothle.startScan(params).subscribe(result => this.handelScan(result), error => this.handelError(error));
    }

    public handelScan(result) {
        console.log('startScanSuccess(' + result.status + ')');
        if (result.status === 'scanStarted') {
            console.log('Info: Scanning for Devices!');
        } else if (result.status === 'scanResult') {
            console.log('Info: New Device ->' + result.address);
            this.bluetoothle.connect({'address': result.address});
            this.bluetoothle.isConnected({address: result.address}).then(res => {
                if (res.isConnected) {
                    let params = {'address': result.address, 'service': '1234', 'characteristic': '4141'};
                    this.bluetoothle.read(params).then(result => this.handleRead(result));
                } else {
                    this.bluetoothle.connect({'address': result.address}).subscribe(res => {
                        console.log('connect -->', res);
                    });
                }
            });
        }
    }

    private handelError(error) {
        console.log('Error: ' + error);
    }

    public handleRead(result) {
        console.log('Info: Read ->' + result);
    }


}
