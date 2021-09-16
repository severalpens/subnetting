import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlsmComponent } from './flsm.component';

describe('FlsmComponent', () => {
  let component: FlsmComponent;
  let fixture: ComponentFixture<FlsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
