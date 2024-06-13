import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTaskComponent } from './creat-task.component';

describe('CreatTaskComponent', () => {
  let component: CreatTaskComponent;
  let fixture: ComponentFixture<CreatTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
