import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ActionTypes } from '../actions';

@Component({
  selector: 'app-todo-overview',
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
    this.ngRedux.dispatch({type: ActionTypes.REMOVE_ALL_TODOS});
  }
}
