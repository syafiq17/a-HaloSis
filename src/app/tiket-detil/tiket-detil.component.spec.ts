import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketDetilComponent } from './tiket-detil.component';

describe('TiketDetilComponent', () => {
  let component: TiketDetilComponent;
  let fixture: ComponentFixture<TiketDetilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketDetilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiketDetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
