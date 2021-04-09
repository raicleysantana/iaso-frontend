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
    TextField,
    Checkbox,
    FormControlLabel,
    FormGroup
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
                        <IconButton edge="start" style={{color: 'var(--color-text-green)'}}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <div className="appbar-content">
                        <Typography variant="h6" style={{color: 'var(--color-text-gray)'}}>Login</Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <div id="login-content">
                <Card>
                    <CardContent>
                        <div className="login-card">

                            <div>
                                <img src={logo} className="login-logo"/>
                            </div>
                            <div>
                                <Typography variant="h6" style={{color: 'var(--color-text-gray)'}}>Acessar o
                                    Sistema</Typography>
                            </div>

                            <br/>
                            <div className="form-login">
                                <div className="form-group">
                                    <TextField
                                        id="form-cpf"
                                        className="input"
                                        label="CPF ou Cartão do SUS"
                                        style={{marginTop: 8, width: '100%'}}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </div>

                                <div className="form-group">
                                    <TextField
                                        id="form-senha"
                                        className="input"
                                        label="Senha"
                                        style={{marginTop: 8, width: '100%'}}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </div>

                                <div className="form-group"
                                     style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
                                    <FormControlLabel
                                        control={<Checkbox checked={false} name="checkedG"/>}
                                        label="Lembrar-se de mim"
                                    />
                                    <Button
                                        className="form-btn"
                                        variant="contained"
                                    >
                                        Entrar
                                    </Button>
                                </div>

                                <div className="form-group"
                                     style={{marginTop: 20, display: 'flex', justifyContent: 'space-between'}}>
                                    <small>Esqueceu sua senha</small> <small>Você ainda não tem uma conta? {<Link
                                    to="/cadastro" className="link-cadastro">Cadastre-se</Link>}</small>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}


export default Login;