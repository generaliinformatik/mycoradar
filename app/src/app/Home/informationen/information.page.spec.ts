import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InfomationenPage } from './infomationen.page';

describe('Tab1Page', () => {
  let component: InfomationenPage;
  let fixture: ComponentFixture<InfomationenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfomationenPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InfomationenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
