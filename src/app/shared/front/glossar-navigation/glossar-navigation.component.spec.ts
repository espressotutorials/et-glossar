import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarNavigationComponent } from './glossar-navigation.component';

describe('GlossarNavigationComponent', () => {
  let component: GlossarNavigationComponent;
  let fixture: ComponentFixture<GlossarNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossarNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlossarNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
