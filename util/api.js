const BASE_URL ='https://server-chi-lime.vercel.app'; //not localhost, use computer IP 
// const BASE_URL ='http://localhost:3000'; //not localhost, use computer IP 
                    // 192.168.254.21
export const questionFetch = (path, options = {}) => {
    return fetch(`${BASE_URL}/api${path}`, options).then(res => {
        if (res.ok) {
            return res.json();
        }

        throw new Error('Something went wrong... please try again.')
    })
    .catch(error => {
        //Log to sentry
        console.warn('ERROR: ', `${BASE_URL}/api${path}`, error);

        throw new Error(error);
    })
}