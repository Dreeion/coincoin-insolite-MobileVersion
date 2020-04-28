import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdpPerduPage } from './mdp-perdu.page';

describe('MdpPerduPage', () => {
  let component: MdpPerduPage;
  let fixture: ComponentFixture<MdpPerduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpPerduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdpPerduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
