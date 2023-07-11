import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUsComponent } from './content-us.component';

describe('ContentUsComponent', () => {
  let component: ContentUsComponent;
  let fixture: ComponentFixture<ContentUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
