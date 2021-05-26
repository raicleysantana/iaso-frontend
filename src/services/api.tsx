import React from 'react';
import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost/iaso-api',
    baseURL: 'https://iaso-atendimento.000webhostapp.com/'
});
