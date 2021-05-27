import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import api from "../../services/api";
import { Simulate } from "react-dom/test-utils";

function Login() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [lembrarme, setLembrarme] = useState(false);

    // @ts-ignore
    async function handleLogin(e) {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_URL}login.php`, {
            method: 'post',
            body: JSON.stringify({ cpf, password })
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            alert(data.mensagem);
        });

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLembrarme(event.target.checked);
    }

    return (
        <>
            <AppBar position="static" color='inherit' className="barra-menu">
                <Toolbar variant="dense">
                    <Link to="/">
                        <IconButton edge="start" style={{ color: 'var(--color-text-green)' }}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                    <div className="appbar-content">
                        <Typography variant="h6" style={{ color: 'var(--color-text-gray)' }}>Login</Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <div id="login-content">
                <Card>
                    <CardContent>
                        <div className="login-card">

                            <div>
                                <img src={logo} className="login-logo" />
                            </div>
                            <div>
                                <Typography variant="h6" style={{ color: 'var(--color-text-gray)' }}>Acessar o
                                    Sistema</Typography>
                            </div>

                            <br />
                            <div className="form-login">
                                <div className="form-group">
                                    <TextField
                                        id="form-cpf"
                                        className="input"
                                        label="CPF ou Cartão do SUS"
                                        style={{ marginTop: 8, width: '100%' }}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                        variant="outlined"
                                        onChange={event => setCpf(event.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <TextField
                                        id="form-senha"
                                        className="input"
                                        label="Senha"
                                        style={{ marginTop: 8, width: '100%' }}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={event => setPassword(event.target.value)}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </div>

                                <div className="form-group"
                                    style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
                                    <FormControlLabel
                                        control={<Checkbox
                                            checked={lembrarme}
                                            name="checkedG"
                                            onChange={e => setLembrarme(e.target.checked)}
                                        />}
                                        label="Lembrar-se de mim"

                                    />
                                    <Button
                                        className="form-btn"
                                        variant="contained"
                                        onClick={(e) => {
                                            handleLogin(e);
                                        }}
                                    >
                                        Entrar
                                    </Button>
                                </div>

                                <div className="form-group"
                                    style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                                    <small>Esqueceu sua senha</small> <small>Você ainda não tem uma conta? {<Link
                                        to="/cadastro-usuario" className="link-cadastro">Cadastre-se</Link>}</small>
                                </div>
                            </div>
                        </div>
                        <br />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}


export default Login;