import Service from './authService';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function All(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/tasks/users/${id}`, options)
  .then(res => res.json())
}

function Dates(id) {
  const options = {
    headers: {
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/tasks/dates/${id}`, options)
  .then(res => res.json())
}

function Create(task) {
  const options = {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/tasks`, options)
  .then(res => res.json())
}

function Update(task) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${Service.fetchToken()}`
    }
  }

  return fetch(`${BASE_URL}/tasks/${task.id}`, options)
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

  return fetch(`${BASE_URL}/tasks/${id}`, options)
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
