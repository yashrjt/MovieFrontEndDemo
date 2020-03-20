import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWishComponent } from './my-wish.component';

describe('MyWishComponent', () => {
  let component: MyWishComponent;
  let fixture: ComponentFixture<MyWishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
