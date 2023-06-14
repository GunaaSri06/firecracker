import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigneshComponent } from './vignesh.component';

describe('VigneshComponent', () => {
  let component: VigneshComponent;
  let fixture: ComponentFixture<VigneshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigneshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigneshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
