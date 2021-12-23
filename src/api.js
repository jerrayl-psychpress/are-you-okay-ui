import axios from 'axios';

const api = axios.create({
    baseURL: `https://hooks.slack.com/services/T1BGWSVUN/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const sendMessage = async (data) => {
    await api.post('B02RRPLDCE7/2SScaL4ARz7hYsXN4EfVHkEj', data);
};
