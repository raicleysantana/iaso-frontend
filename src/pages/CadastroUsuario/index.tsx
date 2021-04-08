import React from 'react';
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
    const [activeStep, setActiveStep] = React.useState(1);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const [sexo, setSexo] = React.useState('');

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
                <Link to="/">
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
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div className="form-group">
                                <TextField
                                    id="date"
                                    label="Data de Nascimento"
                                    type="date"
                                    defaultValue="2018-05-24"
                                    className=""
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormControl component="fieldset" style={{ width : '100%'}}>
                                <FormLabel component="legend">Sexo</FormLabel>
                                <RadioGroup style={{ display : 'inline-block'}} aria-label="gender" name="gender1" value={sexo} onChange={handleChangeSexo}>
                                    <FormControlLabel style={{ float : 'left', width : '45%'}} value="M" control={<Radio/>} label="Masculino"/>
                                    <FormControlLabel style={{ float : 'left', width : '45%'}} value="F" control={<Radio/>} label="Feminino"/>
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
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <div className="form-group">
                                <TextField
                                    id="form-nome"
                                    className="input"
                                    label="Rua"
                                    style={{marginTop: 8, width: '100%'}}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    fullWidth
                                    variant="outlined"
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
                                />
                            </div>
                        </Grid>


                        <Grid item xs={12} md={12}>
                            <div>
                                <Button
                                    style={{float: 'left'}}
                                    disabled={activeStep === 0} onClick={handleBack} className="btn-primary">
                                    Voltar
                                </Button>
                                <Button
                                    style={{float: 'right'}}
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className="btn-primary"
                                >
                                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    </>);
}

export default CadastroUsuario;