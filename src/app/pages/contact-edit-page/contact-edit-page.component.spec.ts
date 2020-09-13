import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEditPageComponent } from './contact-edit-page.component';
import { RouterModule } from '@angular/router';

describe('ContactEditPageComponent', () => {
  let component: ContactEditPageComponent;
  let fixture: ComponentFixture<ContactEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEditPageComponent ],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
