import { Action } from '@ngrx/store';

export enum ActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS',
  }

export namespace Actions {

    export class AddTodo implements Action {
      readonly type = ActionTypes.ADD_TODO;
      constructor(public payload: any) {}
    }
  
    export class ToggleTodo implements Action {
      readonly type = ActionTypes.TOGGLE_TODO;
      constructor(public payload: any) {}
    }
  
    export class RemoveTodo implements Action {
      readonly type = ActionTypes.REMOVE_TODO;
      constructor(public payload: any) {}
    }
  
    export class RemoveAllTodos implements Action {
        readonly type = ActionTypes.REMOVE_ALL_TODOS;
        constructor(public payload: any) {}
    }
  
  }


export declare type AvailableActions = Actions.AddTodo | Actions.ToggleTodo | Actions.RemoveTodo |
 Actions.RemoveAllTodos;
 