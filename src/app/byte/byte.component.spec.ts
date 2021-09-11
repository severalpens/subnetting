import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByteComponent } from './byte.component';

describe('ByteComponent', () => {
  let component: ByteComponent;
  let fixture: ComponentFixture<ByteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
