import { INITIAL_STATE, IAppState } from './store';
import * as fromTODOs from './todo.action';

export function rootReducer(state = INITIAL_STATE, action) :IAppState  {
    switch (action.type){
        case fromTODOs.LOAD_TODO: {
            console.log("Reducer Action Type : ");
            return {...state, 
                loading: true}};
        
        case fromTODOs.LOAD_TODO_SUCCESS: {
           
            return {...state, 
                loading: false,
                todos: action.payload,
                error: null}};

        case fromTODOs.LOAD_TODO_FAILURE:
            return {...state, 
                loading: false,
                todos: null,
                error: "Error message when failure"};

        case fromTODOs.ADD_TODO:
            return {...state, 
                todos : action.payload};

        case fromTODOs.TOGGLE_TODO:
            return {...state, 
                todos : action.payload};

        case fromTODOs.REMOVE_TODO:
            return {...state, 
                todos : action.payload};

        case fromTODOs.REMOVE_ALL_TODOS:
            return {...state, 
                todos : action.payload};

        default:{
           return state;
            }
    }
    
}