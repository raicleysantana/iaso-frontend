import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Grid, TextField, Typography} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';
import iconAlert from '../../../../assets/images/alerta.png';
import {
    Modal as Modal1,
    Modal as Modal2,
    ModalProvider,
    ModalTransition,
    useModal as useModalForm,
    useModal as useModalConfirm
} from 'react-simple-hook-modal';
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
    },
    modal_confirm: {
        height: 100,
        minHeight: '50% !important',
    }
}));

export interface Cadastro {
    dados: {
        codigo: string,
        nome_completo: string
    }
}

interface Props {
    dados?: Cadastro[],
}

const Configuracao: React.FC<Props> = (props) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [nascimento, setNascimento] = useState('');
    const [nome_completo, setNome_completo] = useState('');
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
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        loadDados();
    }, []);

    async function loadDados() {
        const dados = props.dados;
        //console.log(dados.login_codigo.senha);
        // @ts-ignore
        setNome_completo(dados.nome_completo);
        // @ts-ignore
        setRg(dados.rg);
        // @ts-ignore
        setCpf(dados.cpf);
        // @ts-ignore
        setBairro(dados.bairro);
        // @ts-ignore
        setRua(dados.rua);
        // @ts-ignore
        setNumero_casa(dados.numero_casa);
        // @ts-ignore
        setEmail(dados.email);
        // @ts-ignore
        setTelefone(dados.telefone);
        // @ts-ignore
        setCep(dados.cep);
        // @ts-ignore
        setNascimento(dados.nascimento);
        // @ts-ignore
        setCep(dados.cep);
        // @ts-ignore
        setSenha(dados.login_codigo.senha);
        // @ts-ignore
        console.log(dados);
    }

    const classes = useStyles();
    //const {isModalOpen, openModal, closeModal} = useModal();
    const modalForm = useModalForm();
    const modalConfirm = useModalConfirm();

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
                                    {nome_completo}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    Email
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {email}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    RG
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {rg}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    CPF
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {cpf}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    Contato
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {telefone}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    Data de Nascimento
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {nascimento}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    CEP
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {cep}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    Rua
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {rua}
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    Nº
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    {numero_casa}
                                </Grid>
                            </Grid>
                            <div>
                                <Button className="btn-editar" onClick={modalForm.openModal}>
                                    <EditIcon/> Editar
                                </Button>
                                <Button className="btn-historico">
                                    <VisibilityIcon/> Visualizar Histórico
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>


                <Modal1
                    id="modal-1"
                    isOpen={modalForm.isModalOpen}
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
                                    value={nome_completo}
                                    onChange={event => setNome_completo(event.target.value)}
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
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
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
                                    value={rg}
                                    onChange={event => setRg(event.target.value)}
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
                                    value={cpf}
                                    onChange={event => setCpf(event.target.value)}
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
                                    value={telefone}
                                    onChange={event => setTelefone(event.target.value)}
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
                                    value={nascimento}
                                    onChange={event => setNascimento(event.target.value)}
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
                                    value={cep}
                                    onChange={event => setCep(event.target.value)}
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
                                    value={rua}
                                    onChange={event => setRua(event.target.value)}
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
                                    value={numero_casa}
                                    onChange={event => setNumero_casa(event.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} md={3} className={classes.label}>
                                Senha
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <TextField
                                    id=""
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{shrink: false}}
                                    className={classes.textField}
                                    value={senha}
                                    onChange={event => setSenha(event.target.value)}
                                />
                            </Grid>


                            <Grid item md={12}>
                                <Button style={{border: '1px solid', color: '#4F5256', marginRight: 5}}
                                        onClick={modalForm.closeModal}
                                        className={classes.btn}
                                >
                                    <ArrowBackIcon/> Voltar
                                </Button>
                                <Button
                                    style={{backgroundColor: '#4CAF50'}}
                                    onClick={modalConfirm.openModal}
                                    className={classes.btn}
                                >
                                    <SaveIcon/> Salvar
                                </Button>
                            </Grid>
                        </Grid>

                    </>

                </Modal1>

                <Modal2
                    id="modal-2"
                    modalClassName={classes.modal_confirm}
                    isOpen={modalConfirm.isModalOpen}
                    transition={ModalTransition.SCALE}
                >
                    <>
                        <div style={{
                            width: '100%',
                            height: '90%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>

                            <div>
                                <img src={iconAlert} style={{width: 65}}/>
                            </div>
                            <div style={{margin: '10px 0'}}>
                                <h2>Voce tem certeza?</h2>
                            </div>
                            <div>
                                <p>Você tem certeza que deseja alterar seus dados?</p>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button
                                onClick={modalConfirm.closeModal}
                                className={classes.btn}
                                style={{backgroundColor: '#EFEFEF', marginRight: 5, color: '#555555'}}
                            >
                                Cancelar
                            </Button>
                            <Button
                                className={classes.btn}
                                style={{backgroundColor: '#F44336'}}
                            >
                                Sim, Alterar!
                            </Button>
                        </div>
                    </>
                </Modal2>
            </ModalProvider>


        </div>
    );
}

export default Configuracao;