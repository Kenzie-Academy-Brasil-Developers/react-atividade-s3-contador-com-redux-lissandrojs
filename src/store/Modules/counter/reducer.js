import { ADD_COUNTER, SUB_COUNTER } from "./actionTypes";
const initialState  = 0

const counterReducer =(state = initialState,action)=>{
        switch(action.type){
            case ADD_COUNTER:
                return state + action.value ;
            
            case SUB_COUNTER:
                return state - action.value

            default: return state;
        }

}

export default counterReducer