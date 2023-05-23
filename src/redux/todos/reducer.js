import { ADDED, DELETED } from "./actionType";
import { initialState } from "./initialState"


const nextTodoId = (todos)=>{
    const maxId = todos.reduce((maxId,todo)=>Math.max(todo.id,maxId), -1)
    return maxId + 1;
}

const todoReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id:nextTodoId(state)
                }
            ]

        case DELETED:
            return state.filter(todo=>todo.id !== todoId)
          
    }
}

export default todoReducer;