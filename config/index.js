
export const config = {
    apiUrl: (process.env.NODE_ENV === 'production') ? 'https://refillappapi.herokuapp.com' : 'http://localhost:5000',
}
