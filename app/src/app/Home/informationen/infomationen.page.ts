import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {saveAs} from 'file-saver';
import {File} from '@ionic-native/file/ngx';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';

@Component({
    selector: 'app-tab1',
    templateUrl: 'infomationen.page.html',
    styleUrls: ['informationen.page.scss']
})
export class InfomationenPage {


    constructor(public bluetoothle: BluetoothLE, public plt: Platform,
                private file: File) {

        this.plt.ready().then((readySource) => {
            this.bluetoothle.initialize().subscribe(() => this.scan());
            console.log('Platform ready from', readySource);

        });
    }

    // private scan(): void {
    //     this.bluetoothle.discover({address: '69:2E:24:DF:2B:8D', clearCache: false}).then(
    //         device => {
    //             console.log(device);
    //             let file: Blob = new Blob([JSON.stringify(device)], {type: 'text/csv;charset=utf-8'});
    //             saveAs(file, this.file.documentsDirectory + 'test.csv');
    //             setTimeout(() => this.scan(), 30000);
    //         }
    //     );
    // }


    public scan(): void {
        console.log('prepare Scan');
        let params = {
            services: []
        };
        //     '180D',
        //     '180F'
        // /    ],
        // 'allowDuplicates': true,
        // };
        this.bluetoothle.startScan(params).subscribe((success) => {
            console.log('startScan: ' + JSON.stringify(success));
            // setTimeout(() => this.scan(), 30000);
        }, (error) => {
            console.log('error: ' + JSON.stringify(error));
        });
    }
}
