import { API_ENDPOINT } from './constants';

function sendUserData() {
    const requestUrl = buildRequest(API_ENDPOINT);
    const pixelTag = document.createElement('img');
    pixelTag.src = requestUrl;
    document.body.appendChild(pixelTag);
}

function buildRequest(API_ENDPOINT) {
    const userEmail = getEmail();
    const todaysDate = getTodaysDate();
    return `${API_ENDPOINT}?email='${userEmail}'&date='${todaysDate}'`;
}

function getEmail() {
    debugger;
    const email = document.getElementById('email').value;
    return email;
}

function getTodaysDate() {
    /** Format in yyyy-mm-dd */
    let todaysDate = new Date().toISOString().split('T')[0];
    return todaysDate;
}

function main() {
    const notify_me_button = document.getElementById('notify_me_button');
    notify_me_button.addEventListener('click',sendUserData);    
}

main();