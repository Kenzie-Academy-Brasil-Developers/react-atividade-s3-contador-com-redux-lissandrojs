import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";

export const addCash = (value)=>({
    type: ADD_COUNTER,
    value
})


export const payCash =(value)=>({
    type:SUB_COUNTER,
    value
})