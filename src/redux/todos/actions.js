import { ADDED, DELETED } from "./actionType"

export const added = (todoText)=>{
    return {
        type:ADDED,
        payload:todoText
    }
}


export const deleted = (todoId)=>{
    return {
        type:DELETED,
        payload:id
    }
}