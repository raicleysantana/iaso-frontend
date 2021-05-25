import React, { useEffect } from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Home() {

	useEffect(() => {
		fetch("https://iaso-api.000webhostapp.com", {
      		method: 'GET',
      		headers: {
        		'Content-Type': 'application/json',
        		"Access-Control-Allow-Origin": "*"
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
