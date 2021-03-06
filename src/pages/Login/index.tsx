import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Card,
    CardContent,
    TextField,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './style.css';
import logo from '../../assets/images/logo.png';
import api from '../../services/api';
import {ToastContainer, toast} from 'react-toastify';

function Login() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarme, setLembrarme] = useState(false);

    const history = useHistory();
    useEffect(() => {
        const id = localStorage.getItem('id');

        if (id) {
            history.push("/dashboard-paciente");
        }
    }, []);


    // @ts-ignore
    async function handleLogin(e) {
        e.preventDefault();

        await api.post('login/log', {
            nome, senha
        }).then(function (response) {

            if (response.data) {
                const _id = response.data;

                localStorage.setItem('id', _id);


                api.post(`/cadastro/load?id=${_id}`)
                    .then(function (response) {
                        const {codigo, nome_completo, paciente_funcionario} = response.data;
                        const dados = response.data;
                        localStorage.setItem('dados', JSON.stringify(dados));

                        if (paciente_funcionario) {
                            history.push('/dashboard-atendimento');
                        } else {
                            history.push("/dashboard-paciente");
                        }
                    }).catch(function (error) {
                    toast.error(error, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
            } else {
                toast.error('Usu??rio n??o encontrado', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch(function (error) {
            alert(error);
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLembrarme(event.target.checked);
    }

    return (
        <>
            <ToastContainer/>
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
                                        label="CPF ou Cart??o do SUS"
                                        style={{marginTop: 8, width: '100%'}}
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        fullWidth
                                        variant="outlined"
                                        onChange={event => setNome(event.target.value)}
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
                                        onChange={event => setSenha(event.target.value)}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </div>

                                <div className="form-group"
                                     style={{marginTop: 10, display: 'flex', justifyContent: 'space-between'}}>
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
                                     style={{marginTop: 20, display: 'flex', justifyContent: 'space-between'}}>
                                    <small>Esqueceu sua senha</small> <small>Voc?? ainda n??o tem uma conta? {<Link
                                    to="/cadastro-usuario" className="link-cadastro">Cadastre-se</Link>}</small>
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