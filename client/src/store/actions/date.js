import { SET_DATE } from '../actionTypes';

function changeDate(date) {
  return {
    type: SET_DATE,
    date
  }
}