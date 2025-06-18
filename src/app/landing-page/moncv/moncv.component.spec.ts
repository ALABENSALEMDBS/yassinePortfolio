import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncvComponent } from './moncv.component';

describe('MoncvComponent', () => {
  let component: MoncvComponent;
  let fixture: ComponentFixture<MoncvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoncvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoncvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
