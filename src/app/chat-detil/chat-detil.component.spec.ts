import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetilComponent } from './chat-detil.component';

describe('ChatDetilComponent', () => {
  let component: ChatDetilComponent;
  let fixture: ComponentFixture<ChatDetilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
