import { SET_DATE } from '../actionTypes';


function handleChange(date) {
  return {
    type: SET_DATE,
    date
  }
}
export function changeDate(date) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(handleChange(date));
    })
  }
}