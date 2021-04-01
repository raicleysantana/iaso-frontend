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
    FormGroup,
    FormControl,
    FormLabel,
    InputLabel,
    NativeSelect,
    InputBase
} from '@material-ui/core';

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function PreAtendimento() {
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
                            Formulário de pré-atendimento
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>

            <div className="content">
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={3}>

                                <FormControl component="fieldset" className="">
                                    <FormLabel component="legend" style={{fontWeight: 600}}>
                                        Selecione os seus sintomas:
                                    </FormLabel>
                                    <br/>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={true} name="gilad"/>}
                                            label="Febre"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="jason"/>}
                                            label="Falta de Ar"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Tosse"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Coriza"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Diarréia"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Dor de Cabeça"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Perda de paladar ou ofato"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Outros"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <FormControl component="fieldset" className="">
                                    <FormLabel component="legend" style={{fontWeight: 600}}>
                                        Selecione os seus sintomas:
                                    </FormLabel>
                                    <br/>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={true} name="gilad"/>}
                                            label="Doenças respiratórias crônicas descompensadas"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="jason"/>}
                                            label="Doenças renais crônicas em estágio avançado(graus 3, 4 e 5)"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Portador de doenças cromossômicas ou estado de fragilidade imunológica"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Doenças cardíacas crônicas"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Diabetes"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Imunossupressão"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Gestante"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Puérpera (até 45 dias do parto)"
                                        />

                                        <FormControlLabel
                                            control={<Checkbox checked={false} name="antoine"/>}
                                            label="Obesidade"
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <legend className="MuiFormLabel-root" style={{fontWeight: 600}}>
                                    Selecione o SPA mais proximo:
                                </legend>
                                <br/>
                                <select>
                                    <option>Teste 1</option>
                                    <option>Teste 2</option>
                                    <option>Teste 3</option>
                                    <option>Teste 4</option>
                                </select>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}


export default PreAtendimento;