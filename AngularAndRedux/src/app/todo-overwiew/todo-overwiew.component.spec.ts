import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoOverwiewComponent } from './todo-overwiew.component';

describe('TodoOverwiewComponent', () => {
  let component: TodoOverwiewComponent;
  let fixture: ComponentFixture<TodoOverwiewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoOverwiewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoOverwiewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
