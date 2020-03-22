import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {SampleControllerService} from '../../../swagger/backend/services';
import {BackendAdapterService} from '../../shared/adapter/backend/backend-adapter.service';
import {Device} from '@ionic-native/device/ngx';

@Component({
    selector: 'app-ergebnis',
    templateUrl: 'ergebnis.page.html',
    styleUrls: ['ergebnis.page.scss']
})
export class ErgebnisPage {

    public form: FormGroup = this.fb.group({
        positiv: [false, Validators.requiredTrue],
        date: ['', Validators.required]
    });

    public dateFrom: number = Date.now() - 86_400_000 * 14;

    constructor(private fb: FormBuilder, private alertController: AlertController, private service: BackendAdapterService, private uuidService: Device) {
        console.log(this.dateFrom);
    }

    public async save() {
        this.service.addTest({
            datePositive: this.form.get('date').value + 'T00:00:00',
            deviceId: this.uuidService.uuid
        }).subscribe(serverResp => {
            if (serverResp === 'OK') {
                this.alert('Ihr Testergebnis wurde übermittelt. Vielen Dank für Ihre Mitarbeit!');
            } else {
                this.alert('Es ist ein Fehler aufgetreten. Bitte später erneut versuchen!');
            }
        }, error => {
            this.alert('Es ist ein Fehler aufgetreten. Bitte später erneut versuchen!');
        });
    }

    public async hinweis() {
        if (this.form.get('positiv').value) {
            const alert = await this.alertController.create({
                header: 'Hinweis',
                subHeader: '',
                message: 'Sind Sie sich sicher, dass Sie ein positives Testergebnis bestätigen wollen?\n' +
                    'Mit Setzen des Häkchens werden Ihre engeren Kontakte der letzten x Tage informiert.',
                buttons: [
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.form.get('positiv').patchValue(false);
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ],
                cssClass: 'alert-warn'

            });

            await alert.present();
        }
    }

    public async alert(text: string) {
        const alert = await this.alertController.create({
            header: 'Hinweis',
            subHeader: '',
            message: text,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ],

        });
        await alert.present();
    }

}
