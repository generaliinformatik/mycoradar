import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppheaderComponent} from './component/appheader/appheader.component';
import {IonicModule} from '@ionic/angular';


// Datentyp nicht relevant
// tslint:disable-next-line
let components: any = [
   AppheaderComponent
];

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule
    ],
    exports: [
        ...components
    ]
})
export class SharedModule { }
