import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavaleurajouterComponent } from './mavaleurajouter.component';

describe('MavaleurajouterComponent', () => {
  let component: MavaleurajouterComponent;
  let fixture: ComponentFixture<MavaleurajouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavaleurajouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MavaleurajouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
