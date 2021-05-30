import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    AppBar, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Grid,
    IconButton, RadioGroup, Step, StepLabel, Stepper, TextField,
    Toolbar,
    Typography,
    Radio
} from "@material-ui/core";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import './style.css';

function getSteps() {
    return ['Dados Pessoais', 'Criação de Conta', 'Confirmação'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return 'Dados Pessoais';
        case 1:
            return 'Criação de Conta';
        case 2:
            return 'Confirmação';
        default:
            return 'Fim';
    }
}

function CadastroUsuario() {

    const steps = getSteps();
    
    const [activeStep, setActiveStep] = React.useState(0);
    const [data_nascimento, setData_nascimento] = useState<Date | null>(new Date(''));
    const [nome_completo, setNome_clompleto] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero_casa, setNumero_casa] = useState('');
    const [telefone, setTelefone] = useState('');
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [cartao_sus, setCartao_sus] = useState('');
    const [usuario, setUsuario] = useState('');

    const [senha, setSenha] = useState('');
    const [confirmar, setCofirmar] = useState('');


    const handleDateChange = (date: Date | null) => {
        setData_nascimento(date);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        const step = activeStep + 1;

        if (step == 2) {

            if (senha != confirmar) {
                alert("As senhas não conferem");
                return false;
            }


        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleChangeSexo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSexo((event.target as HTMLInputElement).value);
    };

    return (<>
        <AppBar position="static" color='inherit' className="barra-menu">
            <Toolbar variant="dense">
                <Link to="/login">
                    <IconButton edge="start" style={{color: 'var(--color-text-green)'}}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                <div className="appbar-content">
                    <Typography variant="h6" style={{color: 'var(--color-text-gray)'}}>
                        Cadastro de Usuário
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>

        <div className="content">
            <Card>
                <CardContent>
                    <Stepper alternativeLabel activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep == 0 &&
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={12}>
                            <div className="form-group">
                                <TextField
                                    id="form-nome"
                                    className="input"
                                    label="Nome Completo"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setNome_clompleto(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-nome"
                                    className="input"
                                    label="RG"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setRg(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-nome"
                                    className="input"
                                    label="CPF"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setCpf(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="date"
                                    label="Data de Nascimento"
                                    type="date"
                                    defaultValue=""
                                    className=""
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={event => setData_nascimento(new Date(event.target.value))}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormControl component="fieldset" style={{width: '100%'}}>
                                <FormLabel component="legend">Sexo</FormLabel>
                                <RadioGroup style={{display: 'inline-block'}} aria-label="gender" name="gender1"
                                            value={sexo} onChange={handleChangeSexo}>
                                    <FormControlLabel style={{float: 'left', width: '45%'}} value="M"
                                                      control={<Radio/>}
                                                      label="Masculino"/>
                                    <FormControlLabel style={{float: 'left', width: '45%'}} value="F"
                                                      control={<Radio/>}
                                                      label="Feminino"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-nome"
                                    className="input"
                                    label="Bairro"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setBairro(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <div className="form-group">
                                <TextField
                                    className="input"
                                    label="Rua"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setRua(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <div className="form-group">
                                <TextField
                                    id="form-nome"
                                    className="input"
                                    label="Nº"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setNumero_casa(event.target.value)}
                                />
                            </div>
                        </Grid>

                    </Grid>
                    }

                    {activeStep == 1 &&
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <div className="form-group">
                                <TextField
                                    id="form-email"
                                    className="input"
                                    label="E-mail"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <div className="form-group">
                                <TextField
                                    id="form-login"
                                    className="input"
                                    label="Usuário"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setUsuario(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-email"
                                    className="input"
                                    label="Senha"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setSenha(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-email"
                                    className="input"
                                    label="Confirmar Senha"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setCofirmar(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-email"
                                    className="input"
                                    label="Telefone"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setTelefone(event.target.value)}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="form-email"
                                    className="input"
                                    label="Cartão do SUS(Opcional)"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
                                    onChange={event => setCartao_sus(event.target.value)}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    }

                    {
                        activeStep == 2 &&
                        <div>
                            <Typography variant="h6" style={{fontWeight: 'bold', textAlign: 'center'}}>
                                Verificação de celular
                            </Typography>
                            <div className="verificacao-box">
                                <div className="verificacao-content" style={{flexDirection: 'row'}}>
                                    <span className="verificacao-numero">8</span>
                                    <span className="verificacao-numero">8</span>
                                    <span className="verificacao-numero">7</span>
                                    <span className="verificacao-numero">6</span>
                                </div>
                                <div className="">
                                    <p style={{textAlign: 'center', fontSize: 14}}>codigo irá expirar em : 03:12</p>

                                    <div style={{marginTop: 20, marginBottom: 40}}>
                                        <Button
                                            style={{marginTop: 5, backgroundColor: '#1FCC79', color: '#FFF'}}
                                            className="btn-verificacao">
                                            Verificar
                                        </Button>

                                        <Button
                                            style={{marginTop: 5, border: '1px solid #999'}}
                                            className="btn-verificacao">
                                            Reenviar código
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <div>

                                <Button
                                    style={{float: 'left', marginTop: 5}}
                                    disabled={activeStep === 0} onClick={handleBack} className="btn-primary">
                                    Voltar
                                </Button>

                                <Button
                                    style={{float: 'right', marginTop: 5}}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className="btn-primary"
                                >
                                    {activeStep == 0 ? 'Proximo' : (activeStep == 1) ? 'Cadastrar' : 'Finalizar'}
                                </Button>

                            </div>
                        </Grid>
                    </Grid>
                    {console.log(activeStep)}
                </CardContent>
            </Card>
        </div>
    </>);
}

export default CadastroUsuario;