import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TestPage} from './test-page.component';
import {CalendarModule} from 'ion2-calendar';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CalendarModule,
        SharedModule,
        RouterModule.forChild([{path: '', component: TestPage}]),

    ],
    declarations: [TestPage]
})
export class TestPageModule {
}
