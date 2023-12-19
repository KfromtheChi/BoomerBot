import { getToken } from './users-service';

// check login API function that will be called from checkToken in users-service
// will also be able to be called for signup and login function

export default async function sendRequest(url, method = 'GET', payload = null) {
    // fetch will accept options object is a second argument
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    // send JWT to server with ajax requests
    // if there is a valid token in local storage, include it with the ajax request in a header
    const token = getToken();
    if (token) {
        // ensure the headers object exists, if not provide an empty object {}
        options.headers = options.headers || {};
        // add token to an authorization header prefeaced with 'Bearer'
        options.headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(url, options); // response variable
    if (res.ok) return res.json();
    throw new Error('Bad Request'); 
}
