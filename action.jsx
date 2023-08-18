import {ADD_SCHEDULE} from './actionTypes';

export const add = (value)=>{
    return {
        type: ADD_SCHEDULE,
        payload: value,
    }
}