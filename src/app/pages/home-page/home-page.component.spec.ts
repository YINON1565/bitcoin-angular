import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { BitcoinService } from 'src/app/Services/bitcoin-service.service';
import { UserService } from 'src/app/Services/user-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [HttpClientTestingModule],
    //   providers: [BitcoinService, UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
