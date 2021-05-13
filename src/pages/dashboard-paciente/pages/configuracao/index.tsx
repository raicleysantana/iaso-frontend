import React from 'react';
import {Button, Card, CardActions, CardContent, Grid, TextField, Typography} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';
import {ModalProvider, Modal, useModal, ModalTransition} from 'react-simple-hook-modal';
import {makeStyles} from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
    textField: {
        width: '100%',
    },
    label: {
        color: '#4F5256',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    btn: {
        color: '#FFF',
        textTransform: 'initial'
    }
}));

function Configuracao() {
    const classes = useStyles();
    const {isModalOpen, openModal, closeModal} = useModal();

    return (
        <div className="configuracao-content">
            <ModalProvider>
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
                                <Button className="btn-editar" onClick={openModal}>
                                    <EditIcon/> Editar
                                </Button>
                                <Button className="btn-historico">
                                    <VisibilityIcon/> Visualizar Histórico
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>


                <Modal
                    id="any-unique-identifier"
                    isOpen={isModalOpen}
                    transition={ModalTransition.NONE}
                >

                    <>
                        <div>
                            <h2>Editar</h2>
                        </div>

                        <hr className="linha"/>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3} className={classes.label}>
                                Nome
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Email
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                RG
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                CPF
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Contato
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Data de Nascimento
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                CEP
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Endereço
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Nº
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Senha
                            </Grid>
                            <Grid item xs={4} md={5}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item md={12}>
                                <Button style={{border: '1px solid', color: '#4F5256', marginRight: 5}}
                                        onClick={closeModal}
                                        className={classes.btn}
                                >
                                    <ArrowBackIcon/> Voltar
                                </Button>
                                <Button
                                    style={{backgroundColor: '#4CAF50'}}
                                    onClick={closeModal}
                                    className={classes.btn}
                                >
                                    <SaveIcon/> Salvar
                                </Button>
                            </Grid>
                        </Grid>

                    </>

                </Modal>
            </ModalProvider>
        </div>
    );
}

export default Configuracao;