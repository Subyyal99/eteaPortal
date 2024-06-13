import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavigationsComponent } from './user-navigations.component';

describe('UserNavigationsComponent', () => {
  let component: UserNavigationsComponent;
  let fixture: ComponentFixture<UserNavigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNavigationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNavigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
