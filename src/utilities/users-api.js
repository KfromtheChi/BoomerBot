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