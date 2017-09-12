import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';


const initialState = {
  1: {
    id: 1,
    title: 'study for test',
    body: 'review react redux',
    done: false
  },

  2: {
    id: 2,
    title: 'sleep',
    body: 'occasionally',
    done: false
  }
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach( (todo) => {
        const todoId = todo.id;
        newState.todoId = {
          id: todoId,
          title: todo.title,
          body: todo.body,
          done: todo.done
        };
      });
      return newState;

    case RECEIVE_TODO:
      const mergedState = merge({}, state);
      mergedState[action.todo.id] = action.todo;
      return mergedState;
    default:
      return state;
  }
};

export default todosReducer;
