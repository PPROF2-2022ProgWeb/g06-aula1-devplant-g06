import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletComponent } from './user-delet.component';

describe('UserDeletComponent', () => {
  let component: UserDeletComponent;
  let fixture: ComponentFixture<UserDeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
