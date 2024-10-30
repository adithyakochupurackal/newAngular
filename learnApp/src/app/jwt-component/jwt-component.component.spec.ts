import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtComponentComponent } from './jwt-component.component';

describe('JwtComponentComponent', () => {
  let component: JwtComponentComponent;
  let fixture: ComponentFixture<JwtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
