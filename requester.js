const request = require('request-promise');
const rp = require('request-promise')

module.exports = async (phrase) => {
    return await rp({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url: 'https://programmerchallenge.herokuapp.com/challenge/run_task/',
        method: 'POST',
        body: phrase
    });
}