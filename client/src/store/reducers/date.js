import { SET_DATE } from '../actionTypes';

const date = new Date();

const intialState = {
  date
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_DATE:
      return { date: action.date }
    default:
      return state;
  }
}