
import { ADDED, UPDATED, UPDATE_TODO } from "./actionType";
import initialState from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return {
                ...state,
                todos:[...state.todos,{id:nextTodoId(state.todos),...action.payload}],
            }
        case UPDATED :
            return {
                ...state,
                editing:{...action.payload}
            }
        case UPDATE_TODO:
                return {
                  ...state,
                  todos: state.todos.map(todo => {
                    if (todo.id === action.payload.todoId) {
                      return {
                        ...todo,
                        ...action.payload.updatedTodo
                      };
                    }
                    return todo;
                  })
                };
        default:
            return state;
    }
};

export default reducer;