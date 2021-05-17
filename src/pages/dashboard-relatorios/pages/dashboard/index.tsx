import React from 'react';
import './style.css';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

function Dashboard() {

    const classes = useStyles();

    return (
        <>
            <div className={"header"}>
                <Typography variant="h5">
                    Bem vindo ao Dashboard!
                </Typography>
            </div>

            <div style={{padding: 15}}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} md={3}>
                        <div className={"quadro"}>
                            <div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <Typography variant="h6">
                                        150
                                    </Typography>
                                </div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <svg
                                        width="72" height="21" viewBox="0 0 72 21" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 19.5L12.5 13.5L18 2L34.5 13.5L40 7.5L49.5 16.5L56.5 10.5L62 16.5L70.5 7.5"
                                            stroke="#52B156" stroke-width="2"/>
                                    </svg>
                                </div>
                                <div style={{width: '100%', float: 'left'}}>
                                    <small>Casos supeitos</small>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={"quadro"}>
                            <div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <Typography variant="h6">
                                        20
                                    </Typography>
                                </div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <svg width="72" height="21" viewBox="0 0 72 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 19.5L12.5 13.5L18 2L34.5 13.5L40 7.5L49.5 16.5L56.5 10.5L62 16.5L70.5 7.5"
                                            stroke="#03A9F4" stroke-width="2"/>
                                    </svg>
                                </div>
                                <div style={{width: '100%', float: 'left'}}>
                                    <small>Casos em observação</small>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={"quadro"}>
                            <div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <Typography variant="h6">
                                        150
                                    </Typography>
                                </div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <svg width="72" height="21" viewBox="0 0 72 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 19.5L12.5 13.5L18 2L34.5 13.5L40 7.5L49.5 16.5L56.5 10.5L62 16.5L70.5 7.5"
                                            stroke="#AB47BC" stroke-width="2"/>
                                    </svg>
                                </div>
                                <div style={{width: '100%', float: 'left'}}>
                                    <small>
                                        Casos não suspeitos
                                    </small>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <div className={"quadro"}>
                            <div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <Typography variant="h6">
                                        890
                                    </Typography>
                                </div>
                                <div style={{width: '50%', float: 'left'}}>
                                    <svg width="72" height="21" viewBox="0 0 72 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 19.5L12.5 13.5L18 2L34.5 13.5L40 7.5L49.5 16.5L56.5 10.5L62 16.5L70.5 7.5"
                                            stroke="#FF0000" stroke-width="2"/>
                                    </svg>

                                </div>
                                <div style={{width: '100%', float: 'left'}}>
                                    <small>
                                        Casos confirmados
                                    </small>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={"informacoes-box"}>
                            <Typography variant="h6">
                                Tipos de Casos
                            </Typography>

                            <br/>

                            <ul>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'green'}}></div>
                                    Pacientes suspeitos
                                </li>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'blue'}}></div>
                                    Pacientes em observação
                                </li>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'purple'}}></div>
                                    Pacientes sem sintomas suspeitos
                                </li>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'red'}}></div>
                                    Pacientes com covid-19
                                </li>
                            </ul>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={"informacoes-box"}>
                            <Typography variant="h6">
                                Casos por Áreas
                            </Typography>
                            
                            <br/>

                            <ul>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'green'}}></div>
                                    Pacientes suspeitos
                                </li>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'blue'}}></div>
                                    Pacientes em observação
                                </li>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'purple'}}></div>
                                    Pacientes sem sintomas suspeitos
                                </li>
                                <li>
                                    <div className={"circle"} style={{backgroundColor: 'red'}}></div>
                                    Pacientes com covid-19
                                </li>
                            </ul>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    );
}

export default Dashboard;