import React, {useEffect, useState} from 'react';
import {
    Card,
    CardContent,
    Grid,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormControl,
    FormLabel,
    MenuItem,
    Select,
    Button
} from '@material-ui/core';

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import './style.css';

function PreAtendimento() {

    const [sintomas, setSintomas] = useState([
        {id: 1, name: 'sintomas', label: 'Febre', value: 'Febre', isChecked: false},
        {id: 2, name: 'sintomas', label: 'Falta de Ar', value: 'Falta de Ar', isChecked: false},
        {id: 3, name: 'sintomas', label: 'Tosse', value: 'Tosse', isChecked: false},
        {id: 4, name: 'sintomas', label: 'Coriza', value: 'Coriza', isChecked: false},
        {id: 5, name: 'sintomas', label: 'Diarréia', value: 'Diarréia', isChecked: false},
        {id: 6, name: 'sintomas', label: 'Dor de Cabeça', value: 'Dor de Cabeça', isChecked: false},
        {
            id: 7,
            name: 'sintomas',
            label: 'Perda de paladar ou ofato',
            value: 'Perda de paladar ou ofato',
            isChecked: false
        },
        {id: 8, name: 'sintomas', label: 'Outros', value: 'Outros', isChecked: false},
    ]);

    const [condicoes, setCondicoes] = useState([
        {
            id: 1,
            name: 'condicoes',
            label: 'Doenças respiratórias crônicas descompensadas',
            value: 'Doenças respiratórias crônicas descompensadas',
            isChecked: false,
        },
        {
            id: 2,
            name: 'condicoes',
            label: 'Doenças renais crônicas em estágio avançado(graus 3, 4 e 5)',
            value: 'Doenças renais crônicas em estágio avançado(graus 3, 4 e 5)',
            isChecked: false,
        },

        {
            id: 3,
            name: 'condicoes',
            label: 'Portador de doenças cromossômicas ou estado de fragilidade imunológica',
            value: 'Portador de doenças cromossômicas ou estado de fragilidade imunológica',
            isChecked: false,
        },

        {
            id: 4,
            name: 'condicoes',
            label: 'Diabetes',
            value: 'Diabetes',
            isChecked: false,
        },
        {
            id: 5,
            name: 'condicoes',
            label: 'Imunossupressão',
            value: 'Imunossupressão',
            isChecked: false,
        },
        {
            id: 6,
            name: 'condicoes',
            label: 'Gestante',
            value: 'Gestante',
            isChecked: false,
        },
        {
            id: 7,
            name: 'condicoes',
            label: 'Puérpera (até 45 dias do parto)',
            value: 'Puérpera (até 45 dias do parto)',
            isChecked: false,
        },
        {
            id: 8,
            name: 'condicoes',
            label: 'Obesidade',
            value: 'Obesidade',
            isChecked: false,
        },
    ]);
    useEffect(() => {

    }, []);
    /*const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        let sintomas = sintomas;
        sintomas.forEach(item => item.isChecked = event.target.checked)
        setSintomas({sintomas: sintomas})
    }*/

    const enviar = () => {

        console.log(sintomas);
    }

    const handleChange = async (event: React.FormEvent<HTMLInputElement>, index: any) => {
        let value = event.currentTarget.value;
        let checked = event.currentTarget.checked;

        let _sintomas = [...sintomas];

        _sintomas.forEach(sintoma => {
            if (sintoma.value === value) {
                sintoma.isChecked = checked;
            }
        });

        return setSintomas(_sintomas);

    };

    const handleChangeCondicoes = async (event: React.FormEvent<HTMLInputElement>, index: any) => {
        let value = event.currentTarget.value;
        let checked = event.currentTarget.checked;

        let _condicoes = [...condicoes];

        _condicoes.forEach(condicao => {
            if (condicao.value === value) {
                condicao.isChecked = checked;
            }
        });

        return setCondicoes(_condicoes);

    };
    return (<>
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

                                        {[...sintomas].map((item, index) => (
                                            <FormControlLabel
                                                key={item.id}
                                                control={<Checkbox
                                                    checked={item.isChecked}
                                                    name={"sintomas"}
                                                    value={item.label}
                                                    onChange={(e) => handleChange(e, index)}
                                                />
                                                }
                                                label={item.label}
                                            />
                                        ))}
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
                                        {/* <FormControlLabel
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
                                        />*/}
                                        {[...condicoes].map((item, index) => (
                                            <FormControlLabel
                                                key={item.id}
                                                control={<Checkbox
                                                    checked={item.isChecked}
                                                    name={"condicoes"}
                                                    value={item.label}
                                                    onChange={(e) => handleChangeCondicoes(e, index)}
                                                />
                                                }
                                                label={item.label}
                                            />
                                        ))}
                                    </FormGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <legend className="MuiFormLabel-root" style={{fontWeight: 600}}>
                                    Selecione o SPA mais proximo:
                                </legend>
                                <br/>
                                <FormControl className="" style={{width: '95%'}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value=""
                                    >
                                        <MenuItem value={10}>SPA Alvorada</MenuItem>
                                        <MenuItem value={20}>SPA Adrianópolis</MenuItem>
                                        <MenuItem value={30}>SPA Cidade Nova</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button onClick={(e) => enviar()} className="btn-primary" style={{float: 'right'}}
                                        variant="contained">Enviar</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}


export default PreAtendimento;