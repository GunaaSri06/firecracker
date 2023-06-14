import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunaaComponent } from './gunaa.component';

describe('GunaaComponent', () => {
  let component: GunaaComponent;
  let fixture: ComponentFixture<GunaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GunaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
