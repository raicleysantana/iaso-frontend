import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    /*headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        'Access-Control-Allow-Credentials': 'true'
    },*/
});
