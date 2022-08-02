import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAndBootCampComponent } from './course-and-boot-camp.component';

describe('CourseAndBootCampComponent', () => {
  let component: CourseAndBootCampComponent;
  let fixture: ComponentFixture<CourseAndBootCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAndBootCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAndBootCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
