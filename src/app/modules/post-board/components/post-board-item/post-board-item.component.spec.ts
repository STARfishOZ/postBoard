import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBoardItemComponent } from './post-board-item.component';

describe('PostBoardItemComponent', () => {
  let component: PostBoardItemComponent;
  let fixture: ComponentFixture<PostBoardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostBoardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
