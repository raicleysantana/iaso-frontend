import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';

function Home() {
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
