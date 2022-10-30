const {API_ENDPOINT} = require('./constants');

function sendUserData() {
    const pixelTag = document.createElement('img');
    const requestUrl = buildRequest(API_ENDPOINT);
    pixelTag.src = requestUrl;
}

function buildRequest(API_ENDPOINT) {
    const userEmail = getEmail();
    const todaysDate = getTodaysDate();
    return `${API_ENDPOINT}?email=${userEmail}&date=${todaysDate}`;
}

function getEmail() {
    const email = document.getElementById('email');
    debugger;
    // return email.valu
}

function getTodaysDate() {
    /** Format in yyyy-mm-dd */
    let todaysDate = new Date().todaysDate.toISOString().split('T')[0];
    return todaysDate;
}

function main() {
    const notify_me_button = document.getElementById('notify_me_button');
    notify_me_button.addEventListener('click',sendUserData);    
}

main();