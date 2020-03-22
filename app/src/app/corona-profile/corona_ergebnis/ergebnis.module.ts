import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErgebnisPage} from './ergebnis.page';
import {CalendarModule} from 'ion2-calendar';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CalendarModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: ErgebnisPage}]),
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [ErgebnisPage]
})
export class ErgebnisPageModule {
}
