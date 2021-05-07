import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';

function Configuracao() {
    return (<div className="configuracao-content">
            <Card>
                <CardContent>
                    <Typography className="" color="textSecondary" variant="h6" component="h6">
                        <b>Meu Perfil</b>
                    </Typography>
                    <br/>
                    <div style={{marginLeft: 20}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                Nome
                            </Grid>
                            <Grid item xs={12} md={9}>
                                Nome
                            </Grid>
                            <Grid item xs={12} md={3}>
                                Email
                            </Grid>
                            <Grid item xs={12} md={9}>
                                Email
                            </Grid>
                            <Grid item xs={12} md={3}>
                                RG
                            </Grid>
                            <Grid item xs={12} md={9}>
                                RG
                            </Grid>
                            <Grid item xs={12} md={3}>
                                CPF
                            </Grid>
                            <Grid item xs={12} md={9}>
                                CPF
                            </Grid>
                            <Grid item xs={12} md={3}>
                                Contato
                            </Grid>
                            <Grid item xs={12} md={9}>
                                Contato
                            </Grid>
                            <Grid item xs={12} md={3}>
                                Data de Nascimento
                            </Grid>
                            <Grid item xs={12} md={9}>
                                dd/mm/aaaa
                            </Grid>
                            <Grid item xs={12} md={3}>
                                CEP
                            </Grid>
                            <Grid item xs={12} md={9}>
                                69084-623
                            </Grid>
                            <Grid item xs={12} md={3}>
                                Rua
                            </Grid>
                            <Grid item xs={12} md={9}>
                                Rua sei lá
                            </Grid>
                            <Grid item xs={12} md={3}>
                                Nº
                            </Grid>
                            <Grid item xs={12} md={9}>
                                38
                            </Grid>
                        </Grid>
                        <div>
                            <Button className="btn-editar">
                                <EditIcon/> Editar
                            </Button>
                            <Button className="btn-historico">
                                <VisibilityIcon/> Visualizar Histórico
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Configuracao;