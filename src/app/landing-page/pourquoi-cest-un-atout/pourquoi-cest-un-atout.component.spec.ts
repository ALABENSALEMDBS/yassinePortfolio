import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiCestUnAtoutComponent } from './pourquoi-cest-un-atout.component';

describe('PourquoiCestUnAtoutComponent', () => {
  let component: PourquoiCestUnAtoutComponent;
  let fixture: ComponentFixture<PourquoiCestUnAtoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PourquoiCestUnAtoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PourquoiCestUnAtoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
