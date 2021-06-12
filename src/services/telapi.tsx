import React from 'react';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://8nnvjmqmbh.execute-api.eu-west-2.amazonaws.com/api'
    /*headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        'Access-Control-Allow-Credentials': 'true'
    },*/
});