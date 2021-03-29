import React from 'react';
import {Link} from 'react-router-dom';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Container,
    Card,
    CardContent,
    Grid,
    TextField
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './style.css';
import logo from '../../assets/images/logo.png';

function Login() {
    return (
        <>
            <AppBar position="static" color='inherit' className="barra-menu">
                <Toolbar variant="dense">
                    <Link to="/">
                        <IconButton edge="start">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <div className="appbar-content">
                        <Typography variant="h6">Login</Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <div id="login-content">
                <Card>
                    <CardContent>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item md={12}>
                                <img src={logo} className="login-logo"/>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="h5">Acessar o Sistema</Typography>
                            </Grid>
                            <br/>
                            <Grid item md={12}>
                                <TextField
                                    id="form-cpf"
                                    label="CPF"
                                    style={{margin: 8}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="form-senha"
                                    label="Senha"
                                    style={{margin: 8}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button className="button" variant="contained">Entrar</Button>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </div>
        </>
    );
}


export default Login;