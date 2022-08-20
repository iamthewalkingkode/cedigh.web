const axius = {
    get: async (request, payload) => {
        try {
            payload['request'] = request;
            const params = Object.keys(payload)
                .map(function (key) {
                    return key + '=' + payload[key];
                })
                .join('&');
            let response = await fetch(`${API}?${params}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'AkjlXKndJ3fljxC1Fg9kldfgRU5ZNVsm',
                },
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return { status: 606, result: 'Network request failed', error };
        }
    },
    post: async (request, payload) => {
        try {
            let response = await fetch(`${API}?request=${request}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'AkjlXKndJ3fljxC1Fg9kldfgRU5ZNVsm',
                },
                body: JSON.stringify(payload),
            });
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return { status: 606, result: 'Network request failed', error };
        }
    },
};


const swal = {
    error: (text) => {
        return window['Swal'].fire({
            title: 'Error!',
            text,
            icon: 'error',
            confirmButtonText: 'Okay',
        });
    },
    success: (text) => {
        return window['Swal'].fire({
            // title: 'Error!',
            text,
            icon: 'success',
            // confirmButtonText: 'Okay',
        });
    }
};