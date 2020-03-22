import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ErgebnisPage } from './ergebnis.page';

describe('Tab3Page', () => {
  let component: ErgebnisPage;
  let fixture: ComponentFixture<ErgebnisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErgebnisPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ErgebnisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
