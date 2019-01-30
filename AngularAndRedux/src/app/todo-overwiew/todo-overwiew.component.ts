import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_ALL_TODOS } from '../actions';

@Component({
  selector: 'app-todo-overwiew',
  templateUrl: './todo-overwiew.component.html',
  styleUrls: ['./todo-overwiew.component.css']
})
export class TodoOverwiewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }

}
