import { getTokenWorkaround } from "../actions/authActions";

const baseUrl = 'http://localhost:6001/';

async function get(url: string) {
    const requestOptions = {
        method: 'GET',
        headers: await getHeaders()
    } as any;

    const response = await fetch(baseUrl + url, requestOptions);
    return await handleResponse(response);
}


async function post(url: string, body: {}) {
    const requestOptions = {
        method: 'POST',
        headers: await getHeaders(),
        body: JSON.stringify(body)
    } as any;

    const response = await fetch(baseUrl + url, requestOptions);

    return await handleResponse(response);
}

async function put(url: string, body: {}) {
    const requestOptions = {
        method: 'PUT',
        headers: await getHeaders(),
        body: JSON.stringify(body)
    } as any;

    const response = await fetch(baseUrl + url, requestOptions);

    return await handleResponse(response);
}

async function del(url: string) {
    const requestOptions = {
        method: 'DELETE',
        headers: await getHeaders()
    } as any;

    const response = await fetch(baseUrl + url, requestOptions);

    return await handleResponse(response);
}

async function getHeaders() {
    const token = await getTokenWorkaround();
    const headers = {
        'Content-type': 'application/json'
    } as any;

    if (token) {
        headers.Authorization = 'Bearer ' + token.access_token
    }

    console.log('getHeaders called : headers: ', headers)
    return headers;
}

async function handleResponse(response: Response) {
    const text = await response.text();
    console.log('text: ', text);
    //const data = text && JSON.parse(text);
    let data;
    try {
        data = JSON.parse(text);
    } catch (error) {
        data = text
    }

    if (response.ok) {
        return data || response.statusText
    }
    else {
        const error = {
            status: response.status,
            message: typeof data === 'string' ? data : response.statusText
        }

        return { error };
    }
}

export const fetchWrapper = {
    get,
    post,
    put,
    del
}
