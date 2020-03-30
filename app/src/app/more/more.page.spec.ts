import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MorePage } from './more.page';

describe('Tab1Page', () => {
  let component: MorePage;
  let fixture: ComponentFixture<MorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MorePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
