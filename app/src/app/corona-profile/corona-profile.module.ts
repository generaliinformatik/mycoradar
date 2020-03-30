import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'ion2-calendar';
import {ProfileComponent} from './profile/profile.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CalendarModule,
        RouterModule.forChild([
            {path: '', component: ProfileComponent},
            {
                path: 'test', loadChildren: () =>
                    import('./corona_test/test.module').then(m => m.TestPageModule)
            },
            {path: 'ergebnis', loadChildren: () => import('./corona_ergebnis/ergebnis.module').then(m => m.ErgebnisPageModule)}
        ]),
        SharedModule
    ],
    declarations: [ProfileComponent]
})
export class CoronaProfileModule {
}
