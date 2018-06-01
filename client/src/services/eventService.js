import Service from './authService';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function All(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/events/users/${id}`, options)
  .then(resp => resp.json())
}

function Dates(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/events/dates/${id}`, options)
  .then(res => res.json())
}

function Create(event) {
  const options = {
    method: 'POST',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/events`, options)
  .then(resp => resp.json())
}

function Update(event) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/events/${event.id}`, options)
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

  return fetch(`${BASE_URL}/events/${id}`, options)
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
