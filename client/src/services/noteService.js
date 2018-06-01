import Service from './authService';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function All(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/notes/users/${id}`, options)
  .then(resp => resp.json())
}

function Dates(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/notes/dates/${id}`, options)
  .then(res => res.json())
}

function Create(note) {
  const options = {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/notes`, options)
  .then(resp => resp.json())
}

function Update(note) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(note),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/notes/${note.id}`, options)
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

  return fetch(`${BASE_URL}/notes/${id}`, options)
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
