import {ADD_SCHEDULE, DELETE_SCHEDULE} from './actionTypes';

export const add = (value)=>{
    return {
        type: ADD_SCHEDULE,
        payload: value,
    }
}
export const deleteSchedule = (id)=>{
    return {
        type: DELETE_SCHEDULE,
        payload: id,
    }
}