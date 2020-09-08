import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMoveComponent } from './chart-move.component';

describe('ChartMoveComponent', () => {
  let component: ChartMoveComponent;
  let fixture: ComponentFixture<ChartMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
