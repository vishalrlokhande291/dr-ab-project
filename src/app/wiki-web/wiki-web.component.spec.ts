import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiWebComponent } from './wiki-web.component';

describe('WikiWebComponent', () => {
  let component: WikiWebComponent;
  let fixture: ComponentFixture<WikiWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikiWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
