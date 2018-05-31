const BASE_URL = process.env.REACT_APP_BASE_URL;

function login(creds) {
  const options = {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${BASE_URL}/login`, options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

function register(creds) {
  const options = {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`${BASE_URL}/users`, options)
  .then(resp => {
    if (!resp.ok) throw new Error('There was an error');
    return resp.json();
  })
}

export {
  register,
  login
}
