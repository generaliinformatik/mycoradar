import {Component, OnInit} from '@angular/core';
import {BluetoothLE, ScanStatus, Device} from '@ionic-native/bluetooth-le/ngx';
import {Platform} from '@ionic/angular';
import {DatabaseService} from '../../shared/services/database-service/database-service';
import {Device as AppDevice} from '@ionic-native/device/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

@Component({
    selector: 'app-profile',
    templateUrl: './eingabe.component.html',
    styleUrls: ['./eingabe.component.scss']
})

export class ProfileComponent implements OnInit {
    UUID_SERVICE = '1842';

    private handeltAdresses = new Array();
    private sendAdvertising: boolean;
    private processesScan: boolean;
    private uuid: string;

    constructor(public bluetoothle: BluetoothLE, public plt: Platform, private databaseService: DatabaseService, private uuidService: UniqueDeviceID) {
        this.uuidService.get().then(res => this.uuid = res.toString());
        this.plt.ready().then((readySource) => {
            let params = {
                'request': true,
                'statusReceiver': true,
                'restoreKey': 'bluetoothleplugin'
            };
            this.bluetoothle.initialize(params).subscribe(result => this.initBLE(result), error => this.handelError(error));
        });

    }

    ngOnInit(): void {

    }


    public initBLE(result) {
        if (result.status == 'enabled') {
            console.log('Info: BLE-Modem is ready!');
            this.sendAdvertising = true;
            this.processesScan = true;
            this.startScan();
            this.initBeacon();
        } else {
            console.log('Error: BLE-Modem is offline!');
        }

    }

    public initBeacon() {
        let params = {
            'request': true,
            'restoreKey': 'bluetoothleplugin'
        };
        this.bluetoothle.initializePeripheral(params).subscribe(result => this.initHandleBeacon(result), error => this.handelError(error));
    }

    public initHandleBeacon(result) {
        if (result.status === 'enabled') {
            this.createService();
        }

        if (result.status === 'connected') {
            this.sendAdvertising = false;
            this.processesScan = false;
        }

        if (result.status === 'disconnected') {
            this.sendAdvertising = true;
            this.processesScan = true;
        }
    }


    public createService() {
        console.log('Creating Service');
        let params = {
            service: this.UUID_SERVICE,
            characteristics: [
                {
                    uuid: this.uuid + '',
                    permissions: {
                        read: true,
                        write: false,
                    },
                    properties: {
                        read: true,
                        writeWithoutResponse: false,
                        write: false,
                        notify: false,
                        indicate: false
                    }
                }
            ]
        };
        this.bluetoothle.addService(params).then(result => this.startAdvertising(result)).catch(error => console.log('Error by AddService', error));
    }

    public startAdvertising(result) {
        console.log('Info Service Create: ' + JSON.stringify(result));
        this.advertise();
    }

    public advertise() {
        let params = {
            services: [this.UUID_SERVICE], //iOS
            service: this.UUID_SERVICE, //Android
            name: 'COVID19-Radar',
            timeout: 30000
        };
        if (this.sendAdvertising) {
            this.bluetoothle.startAdvertising(params).then(res => console.log('Start Advertising', res)).catch(err => console.log('err beim advertising', err));
        }
    }

    public startScan() {
        let params = {
            'allowDuplicates': true,
        };
        this.bluetoothle.startScan(params).subscribe(result => this.handelScan(result), error => this.handelError(error));
    }


    public handelScan(result: ScanStatus) {
        if (result.status === 'scanStarted') {
            console.log('Info: Scanning for Devices!');
        } else if (result.status === 'scanResult' && this.processesScan && result.rssi < -50) {
            if (this.handeltAdresses.indexOf(result.address) == -1) {
                console.log('Info: New Device ->' + result.address);
                this.sendAdvertising = false;
                this.processesScan = false;
                this.handeltAdresses.push(result.address);
                this.connectToDevice(result);
            }
        }
    }

    public connectToDevice(res) {
        let params =
            {
                'address': res.address
            };
        this.bluetoothle.connect(params).subscribe(result => this.onConnect(res), error => this.handelError(error));
    }

    public onConnect(res) {
        console.log(res.address);
        this.bluetoothle.discover(res).then(result => this.onDisconver(result));
    }

    public onDisconver(res: Device) {
        console.log('Discover -->' + JSON.stringify(res));
        let params = {address: res.address, service: this.UUID_SERVICE, characteristic: this.uuid};
        if (res.services.find(serv => serv.uuid === this.UUID_SERVICE) === undefined) {
            this.handeltAdresses.push(res.address);
            this.bluetoothle.disconnect(params).then(resultDis => {
                this.sendAdvertising = true;
                this.processesScan = true;
            });
        } else {
            console.log('New Database Entry', res.services.find(serv => serv.uuid === this.UUID_SERVICE).characteristics[0].uuid);
            this.databaseService.setNewEntry(res.services.find(serv => serv.uuid === this.UUID_SERVICE).characteristics[0].uuid);
        }

    }

    public handleRead(result) {
        console.log('Info: Read ->' + result);
    }

    private handelError(error) {
        console.log('Error: ' + JSON.stringify(error));
        this.sendAdvertising = true;
        this.processesScan = true;
    }
}
