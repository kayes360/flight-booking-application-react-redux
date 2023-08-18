import { ADD_SCHEDULE, DELETE_SCHEDULE } from "./actionTypes";
 
const initialState = [];

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCHEDULE:
  
      return [
        ...state,
        {
          id: action.payload.id,
          destinationFrom: action.payload.destinationFrom,
          destinationTo: action.payload.destinationTo,
          journeyDate: action.payload.journeyDate,
          guestCount: action.payload.guestCount,
          ticketClass: action.payload.ticketClass,
        },

      ];
      case DELETE_SCHEDULE: 

        return  state.filter(stateTripdata => stateTripdata.id !== action.payload )

    default:
      return state
  }
};

export default actionReducer;
