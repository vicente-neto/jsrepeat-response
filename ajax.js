class Request {
    constructor(
        url,
        resolve=function(response){console.log(response);},
        reject=function(status){console.log(status);}) {    
        this.xhr(url)
        .then(function (request) {
            resolve(request.responseText);
        })
        .catch(function (request) {
            reject(request.statusText);
        });
    }

    xhr = function (url) {
        // Create the XHR request
        var request = new XMLHttpRequest();
        // Return it as a Promise
        return new Promise(function (resolve, reject) {
            // Setup our listener to process compeleted requests
            request.onreadystatechange = function () {
                // Only run if the request is complete
                if (request.readyState !== 4) return;
                // Process the response
                if (request.status >= 200 && request.status < 300) {
                    // If successful
                    resolve(request);
                } else {
                    // If failed
                    reject(request);
                }
            };
            // Setup our HTTP request
            request.open('GET', url, true);
            // Send the request
            request.send();
        });
    };



  }

