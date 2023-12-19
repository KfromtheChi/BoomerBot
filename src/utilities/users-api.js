import sendRequest from './send-request';
const BASE_URL = '/API/users';

// signup
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

// login
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// check login
export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

// change name - handles the name change request
export function changeName(newName) {
  return sendRequest(`${BASE_URL}/changeName`, 'PUT', { name: newName })
};

// delete account - handles the delete account request by deleting the users id
export function deleteAccount(userId) {
  return sendRequest(`${BASE_URL}/deleteAccount`, 'DELETE')
};