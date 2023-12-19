import * as usersAPI from './users-api';

// sign-in/sign-up function
export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  // persist/save jwt token - locally stored
  // two areguments:
  // 'token' represents the key where the item is stored at in the local storage object
  // token is the actual token itself
  localStorage.setItem('token', token); 
  return getUser();
}

// login
export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token); 
  return getUser();
}

// logout function
export function logOut() {
  localStorage.removeItem('token');
}

// Set userState when page is loaded or refreshed

export function getToken() {
  // 1. retrieve token from local storage - declare a variable named token
  const token = localStorage.getItem('token');
  // 2. if there is no token(string), set user to null
  if (!token) return null;
  // if token value exists at the 'token' key, obtain its payload
  const payload = JSON.parse(atob(token.split('.')[1]));
  // 3. if token is expired, remove it from local storage and set user to null
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  // 4. if token exists and hasn't expired, return token
  return token;
}

// 4. if there is a token and it isn't expired, extract user object from payload, and set user state to that object
export function getUser() {
  const token = getToken();
  // return the token and user in the payload, otherwise if token has no user: return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

// check login button - renders on order history page
export function checkToken() {
  // calling the function in users-api
  return usersAPI.checkToken()
    // then promise returns a string with a date object
    .then(dateStr => new Date(dateStr));
}
