import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsPageComponent } from './contact-details-page.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

describe('ContactDetailsPageComponent', () => {
  let component: ContactDetailsPageComponent;
  let fixture: ComponentFixture<ContactDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsPageComponent ],
      imports: [RouterModule.forRoot([]),]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
