import {Component, OnInit} from '@angular/core';
import {BluetoothLE, ScanStatus, Device} from '@ionic-native/bluetooth-le/ngx';
import {Platform} from '@ionic/angular';
import {DatabaseService} from '../../shared/services/database-service/database-service';
import {Device as AppDevice} from '@ionic-native/device/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    public ngOnInit(): void {
    }
}
