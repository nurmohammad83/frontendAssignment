import { ADDED, UPDATED, UPDATE_TODO } from "./actionType"

export const addTodo = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};
export const upadateTodo =(todo)=>{
    return {
        type:UPDATED,
        payload:todo
    }
}

export const allUpdateTodo = (todoId, updatedTodo) => {
    return {
      type: UPDATE_TODO,
      payload: {
        todoId,
        updatedTodo
      }
    };
  };
  
// export const deleted = (todoId) => {
//     return {
//         type: DELETED,
//         payload: todoId,
//     };
// };