import {Component} from '@angular/core';

import {AlertController, Platform, ToastController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {PushService} from './shared/services/push-service/push.service';
import {BackendAdapterService} from './shared/adapter/backend/backend-adapter.service';
import {DatabaseService} from './shared/services/database-service/database-service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public positiv: boolean = true;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private backgroundMode: BackgroundMode,
        public toastController: ToastController,
        private pushService: PushService,
        private alertController: AlertController,
        private service: BackendAdapterService,
        private databaseSerive: DatabaseService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();

            this.backgroundMode.enable();
            this.databaseSerive.removeOldData();
            this.databaseSerive.getContactKeys().then(ids => {
                console.log(ids);
                this.service.getContact(ids.map(id => id + '')).subscribe(res => {
                    console.log(res);
                    if (res) {
                        this.popUp();
                    } else {
                        this.splashScreen.hide();
                    }
                });            // this.notificationSetup();
            });
        });
    }

    // private async presentToast(message) {
    //     const toast = await this.toastController.create({
    //         message,
    //         duration: 3000
    //     });
    //     toast.present();
    // }
    //
    // private notificationSetup() {
    //     this.pushService.getToken();
    //     this.pushService.onNotifications().subscribe(
    //         (msg) => {
    //             if (this.platform.is('ios')) {
    //                 this.presentToast(msg.aps.alert);
    //             } else {
    //                 this.presentToast(msg.body);
    //             }
    //         });
    // }

    private async popUp() {
        const alert = await this.alertController.create({
            header: 'Achtung!',
            subHeader: '',
            message: 'Sie haben sich längere Zeit in der Nähe von einer Person aufgehalten, die angegeben hat, dass ihr Corona Testergebnis positiv ist.',
            buttons: [
                {
                    text: 'Verstanden',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.splashScreen.hide();
                    }
                },
            ],
            cssClass: 'alert-warn',
        });

        await alert.present();

    }
}
