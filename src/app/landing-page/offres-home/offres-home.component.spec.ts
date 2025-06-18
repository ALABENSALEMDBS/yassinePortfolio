import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresHomeComponent } from './offres-home.component';

describe('OffresHomeComponent', () => {
  let component: OffresHomeComponent;
  let fixture: ComponentFixture<OffresHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffresHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
