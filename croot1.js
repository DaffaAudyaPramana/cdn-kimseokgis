function handleJSONResponse(response) {
    const status = response.status;
    return response.text().then(result => {
        try {
            const parsedResult = result ? JSON.parse(result) : {};
            return { status, data: parsedResult };
        } catch (error) {
            console.error('JSON parse error:', error);
            return { status, data: null, error: 'Failed to parse JSON' };
        }
    });
}

export function getJSON(target_url, tokenkey, tokenvalue, responseFunction) {
    let myHeaders = new Headers();
    myHeaders.append(tokenkey, tokenvalue);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch(target_url, requestOptions)
        .then(response => handleJSONResponse(response))
        .then(responseFunction)
        .catch(error => console.log('error', error));
}

export function postJSON(target_url, tokenkey, tokenvalue, datajson, responseFunction) {
    let myHeaders = new Headers();
    myHeaders.append(tokenkey, tokenvalue);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(datajson);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => handleJSONResponse(response))
        .then(responseFunction)
        .catch(error => console.log('error', error));
}

export function deleteJSON(target_url, tokenkey, tokenvalue, datajson, responseFunction) {
    let myHeaders = new Headers();
    myHeaders.append(tokenkey, tokenvalue);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(datajson);

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => handleJSONResponse(response))
        .then(responseFunction)
        .catch(error => console.log('error', error));
}

export function putJSON(target_url, tokenkey, tokenvalue, datajson, responseFunction) {
    let myHeaders = new Headers();
    myHeaders.append(tokenkey, tokenvalue);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(datajson);

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => handleJSONResponse(response))
        .then(responseFunction)
        .catch(error => console.log('error', error));
}
