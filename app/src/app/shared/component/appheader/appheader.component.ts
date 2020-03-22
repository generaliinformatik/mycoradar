import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-appheader',
    templateUrl: './appheader.component.html',
    styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {

    @Input() public title: string = '';
    @Input() public subtitle: string = '';
    @Input() showBackButton: boolean = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public back() {
        window.history.back();
    }
}
