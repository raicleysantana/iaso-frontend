import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});
