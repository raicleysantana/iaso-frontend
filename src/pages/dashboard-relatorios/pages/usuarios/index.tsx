import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { DataGrid, GridColDef, GridValueFormatterParams, ptBR } from '@material-ui/data-grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select, Grid, TextField, withStyles, InputBase, } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import './style.css';
import 'react-simple-hook-modal/dist/styles.css';
import {
    Modal as Modal1,
    Modal as Modal2,
    ModalProvider,
    ModalTransition,
    useModal as useModalForm,
    useModal as useModalConfirm
} from 'react-simple-hook-modal';
import iconAlert from '../../../../assets/images/alerta.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        labelGray: {
            color: "#999",
            marginBottom: 5,
        },
        info: {
            width: '100%',
            marginTop: 5,
            marginBottom: 5,
        },

        modal_footer: {
            position: 'relative',
        },

        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        textField: {
            width: '100%',
        },
        label: {
            color: '#4F5256',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'left',
        },
        btn: {
            color: '#FFF',
            textTransform: 'initial'
        },
        modal_confirm: {
            height: 100,
            minHeight: '50% !important',
        }
    }),
);

const theme = createMuiTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    ptBR,
);

function App() {
    const classes = useStyles();
    //const {isModalOpen, openModal, closeModal} = useModal();
    const modalForm1 = useModalForm();
    const modalForm2 = useModalForm();
    const modalConfirm = useModalConfirm();

    const [age, setAge] = React.useState('');

    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    const rows = [
        {
            id: 1,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Jon',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 2,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Cersei',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 3,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Jaime',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 4,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Arya',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 5,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Daenerys',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 6,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'teste',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 7,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Ferrara',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 8,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Rossini',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
        {
            id: 9,
            tipoUsuario: 'Usuário - paciente',
            firstName: 'Harvey',
            contato: '(99) 9999-9999',
            login: 'login.usuario'
        },
    ];


    const columns: GridColDef[] = [
        { field: 'tipoUsuario', headerName: 'Tipo de usuário', width: 150 },
        { field: 'firstName', headerName: 'Nome', width: 280 },
        { field: 'login', headerName: 'Login', width: 150 },
        { field: 'contato', headerName: 'Contato', width: 170 },
        {
            field: 'teste',
            width: 170,
            headerName: 'Perfil',
            renderCell: (params: GridValueFormatterParams) => {
                return (
                    <>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Ação</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={""} onClick={modalForm1.openModal}>Visualizar</MenuItem>
                                <MenuItem value={""}>Deletar</MenuItem>
                            </Select>
                        </FormControl>
                    </>
                );
            }
        },
    ];


    return (
        <ModalProvider>
            <div style={{ backgroundColor: '#FFFFFF', padding: 15 }}>
                <h2>
                    Usuários
                </h2>

                <hr className="linha" />

                <div style={{ margin: '5px 0', width: '100%', float: 'left' }}>
                    <div className="contentInput">
                        <input
                            type="text"
                            id="pesquisar"
                            placeholder="Pesquisar..."
                        />
                    </div>
                    <div className="contentInput">
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                className="contentButton"
                                style={{ backgroundColor: '#4CAF50', color: '#FFF' }}
                                onClick={modalForm2.openModal}>
                                <AddIcon style={{ marginRight: 10 }} /> Criar novo usuario
                            </Button>
                        </div>
                    </div>
                </div>

                <div style={{ height: 400, width: '100%' }}>
                    <ThemeProvider theme={theme}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                        />
                    </ThemeProvider>
                </div>


            </div>

            <Modal1
                id="modal-1"
                isOpen={modalForm1.isModalOpen}
                transition={ModalTransition.NONE}
            >
                <div style={{ position: 'relative', minHeight: '55vh' }}>

                    <div style={{ width: '40%', float: 'left' }}>
                        <div>
                            <h4>
                                <b>Informações do paciente</b>
                            </h4>
                        </div>
                        <br />
                        <hr />
                        <div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Nome:</label></div>
                                <div>Fulano de Tal</div>
                            </div>

                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Data de Nascimento:</label></div>
                                <div>Fulano de Tal</div>
                            </div>

                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Sexo:</label></div>
                                <div>Fulano de Tal</div>
                            </div>

                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Contato:</label></div>
                                <div>Fulano de Tal</div>
                            </div>

                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Caterira do SUS:</label></div>
                                <div>Fulano de Tal</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '60%', float: 'left' }}>
                        <div>
                            <h4>
                                <b>Diagnostico do Paciente</b>
                            </h4>
                        </div>
                        <br />
                        <hr />
                        <div style={{ width: '100%' }}>
                            <p>
                                O paciente relatou os seguintes sintomas, febre, dor de cabeça, perca de paladar.
                                O paciente possui as seguintes condições de saúde, possui obesidade, glicose alta...
                        </p>
                        </div>
                    </div>
                    <div style={{ width: '100%', float: 'left' }}>
                        <div className={classes.modal_footer}>
                            <Button
                                style={{ border: '1px solid #ccc', marginTop: 100 }}
                                onClick={modalForm1.closeModal}
                            >Voltar</Button>
                        </div>
                    </div>
                </div>
            </Modal1>

            <Modal2
                id="modal-2"
                isOpen={modalForm2.isModalOpen}
                transition={ModalTransition.NONE}
            >
                <>
                    <div>
                        <p style={{fontSize: 25}} >Criar</p>
                        <hr className="linha"/>
                        <h3>Novo Usuário</h3>
                    </div>

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
                                InputLabelProps={{ shrink: false }}
                                className={classes.textField}
                            />
                        </Grid>

                        <Grid item xs={12} md={3} className={classes.label}>
                            Tipo de Usuário
                            </Grid>
                        <Grid item xs={12} md={9}>
                            <TextField
                                id=""
                                label=""
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
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
                                InputLabelProps={{ shrink: false }}
                                className={classes.textField}
                            />
                        </Grid>

                        <Grid item xs={12} md={3} className={classes.label}>
                            Senha
                            </Grid>
                        <Grid item xs={4} md={3}>
                            <TextField
                                id=""
                                label=""
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: false }}
                                className={classes.textField}
                            />
                        </Grid>

                        <Grid item xs={12} md={3} className={classes.label}>
                            Confirmar Senha
                            </Grid>
                        <Grid item xs={4} md={3}>
                            <TextField
                                id=""
                                label=""
                                variant="outlined"
                                size="small"
                                InputLabelProps={{ shrink: false }}
                                className={classes.textField}
                            />
                        </Grid>

                        <Grid item md={12}>
                            <Button style={{ border: '1px solid', color: '#4F5256', marginRight: 5 }}
                                onClick={modalForm2.closeModal}
                                className={classes.btn}
                            >
                                <ArrowBackIcon style={{ marginRight: 10 }} /> Voltar
                                </Button>
                            <Button
                                style={{ backgroundColor: '#4CAF50' }}
                                onClick={modalConfirm.openModal}
                                className={classes.btn}
                            >
                                <SaveIcon style={{ marginRight: 10 }} /> Confirmar
                                </Button>
                        </Grid>
                    </Grid>
                </>
            </Modal2>

            <Modal2
                    id="modal-3"
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
                                <h2>Usuário criado com sucesso!</h2>
                            </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button
                                className={classes.btn}
                                style={{backgroundColor: '#F44336'}}
                                onClick={modalConfirm.closeModal}
                            >
                                Ok
                            </Button>
                        </div>
                    </>
                </Modal2>
        </ModalProvider>
    );
}

const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }),
)(InputBase);

export default App;