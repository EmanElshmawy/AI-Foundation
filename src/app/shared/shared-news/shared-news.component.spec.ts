import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNewsComponent } from './shared-news.component';

describe('SharedNewsComponent', () => {
  let component: SharedNewsComponent;
  let fixture: ComponentFixture<SharedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
