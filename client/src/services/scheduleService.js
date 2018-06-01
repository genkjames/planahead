import Service from './authService';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function All(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/schedules/users/${id}`, options)
  .then(res => res.json())
}

function Dates(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/schedules/dates/${id}`, options)
  .then(res => res.json())
}

function Create(schedule) {
  const options = {
    method: 'POST',
    body: JSON.stringify(schedule),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/schedules`, options)
  .then(res => res.json())
}

function Update(schedule) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(schedule),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/schedules/${schedule.id}`, options)
  .then(res => {
    if (!res.ok) throw new Error('There was an error');
    return res.json()
  })
}

function Delete(id) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/schedules/${id}`, options)
  .then(res => {
    if(!res.ok) throw new Error('There was an error');
    return res.json();
  })
}

export default {
  All,
  Dates,
  Create,
  Update,
  Delete
}
