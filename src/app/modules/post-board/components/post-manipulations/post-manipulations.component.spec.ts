import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManipulationsComponent } from './post-manipulations.component';

describe('PostManipulationsComponent', () => {
  let component: PostManipulationsComponent;
  let fixture: ComponentFixture<PostManipulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostManipulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostManipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
