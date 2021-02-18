import { ADD_NEXT_POST, ADD_PREV_POST } from "../actions";

const initialState  = {
    prevPost:null,
    nextPost:null
}


const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_NEXT_POST:
            return{
                ...state,
                nextPost:action.nextPost
            }
    
        case ADD_PREV_POST:
            return{
                ...state,
                prevPost:action.prevPost
            }
    
        default:
            return state;
    }
}


export default reducer;


export const getPostState = state =>state.post; 