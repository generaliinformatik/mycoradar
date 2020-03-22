import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';
import {BLE} from '@ionic-native/ble/ngx';
import {File} from '@ionic-native/file/ngx';
import {SharedModule} from './shared/shared.module';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';

import {PushService} from './shared/services/push-service/push.service';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial/ngx';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {DatabaseService} from './shared/services/database-service/database-service';
import {Device} from '@ionic-native/device/ngx';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        SharedModule,
        FontAwesomeModule,
        HttpClientModule,
        IonicStorageModule.forRoot({
            name: '_coradar',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BluetoothLE,
        BLE,
        File,
        BackgroundMode,
        BluetoothSerial,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        PushService,
        DatabaseService,
        Device,
        UniqueDeviceID
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
