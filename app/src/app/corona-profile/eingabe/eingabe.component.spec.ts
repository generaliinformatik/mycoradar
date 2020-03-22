import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EingabeComponent } from './eingabe.component';

describe('EingabeComponent', () => {
  let component: EingabeComponent;
  let fixture: ComponentFixture<EingabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EingabeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
