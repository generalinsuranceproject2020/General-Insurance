import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalregisterationComponent } from './finalregisteration.component';

describe('FinalregisterationComponent', () => {
  let component: FinalregisterationComponent;
  let fixture: ComponentFixture<FinalregisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalregisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
