import {Component, OnInit} from '@angular/core';
import {BluetoothLE} from '@ionic-native/bluetooth-le/ngx';
import {AlertController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-radar',
    templateUrl: './recommendation.page.html',
    styleUrls: ['./recommendation.page.css']
})
export class RecommendationPage implements OnInit {

    constructor(public plt: Platform, public alertController: AlertController) {
    }

    ngOnInit(): void {
        this.presentAlert();
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Hinweis',
            subHeader: '',
            message: 'Wenn Sie sich aktuell schwer krank fühlen und oder direkt Kontakt zu einer positiv\n' +
                '        getesteten Person hatten, kontaktieren Sie bitte Ihren Hausarzt, ein Testzentrum oder eine Hotline, wie die der\n' +
                '        Kassenärztlichen Vereinigung oder des Gesundheitsamtes (wichtig: die telefonische Voranmeldung) und schildern\n' +
                '        Sie die Symptome und besprechen Sie das weitere Vorgehen.\n' +
                '    ',
            buttons: ['Verstanden']
        });
        await alert.present();
    }
}

