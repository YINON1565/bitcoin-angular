import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticPageComponent } from './statistic-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BitcoinService } from 'src/app/Services/bitcoin-service.service';

describe('StatisticPageComponent', () => {
  let component: StatisticPageComponent;
  let fixture: ComponentFixture<StatisticPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticPageComponent ],
      imports: [HttpClientTestingModule],
      providers: [BitcoinService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
