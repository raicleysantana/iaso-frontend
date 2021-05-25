import React, { useEffect } from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Home() {

	useEffect(() => {
		fetch("http://iaso.atwebpages.com", {
      		method: 'GET',
      		headers: {
        		"Access-Control-Allow-Origin": "*",
       			"Access-Control-Allow-Headers": "Authorization", 
        		"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      			"Content-Type": "application/json;charset=UTF-8" 
      		},
      //body: JSON.stringify({ produto })
    })
		.then((response) => alert(JSON.stringify(response.json()))).then((responseJson) => {
        console.log(responseJson)
     	
      })
	},[]);

    return (<>

            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Link to="/login">Entrar</Link>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Home;
