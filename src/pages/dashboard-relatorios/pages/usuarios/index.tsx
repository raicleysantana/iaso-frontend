import React, {useState, useEffect} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {DataGrid, GridColDef, GridValueFormatterParams, ptBR} from '@material-ui/data-grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import './style.css';
import {ModalProvider, Modal, useModal, ModalTransition} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

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
    }),
);

const theme = createMuiTheme(
    {
        palette: {
            primary: {main: '#1976d2'},
        },
    },
    ptBR,
);

function App() {
    const classes = useStyles();

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

    const {isModalOpen, openModal, closeModal} = useModal();


    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 50},
        {field: 'tipoUsuario', headerName: 'Tipo de usuário', width: 150},
        {field: 'firstName', headerName: 'Nome', width: 280},
        {field: 'login', headerName: 'Situação', width: 150},
        {field: 'contato', headerName: 'Data de Nascimento', width: 170},
        {
            field: 'teste',
            width: 170,
            headerName: 'Relatórios',
            renderCell: (params: GridValueFormatterParams) => {
                return (
                    <>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Ação</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={""} onClick={openModal}>Visualizar</MenuItem>
                                <MenuItem value={""}>Deletar</MenuItem>
                            </Select>
                        </FormControl>
                    </>
                );
            }
        },
    ];

    const ModalContent = () => (
        <>
            <div style={{position: 'relative', minHeight: '55vh'}}>

                <div style={{width: '40%', float: 'left'}}>
                    <div>
                        <h4>
                            <b>Informações do paciente</b>
                        </h4>
                    </div>
                    <br/>
                    <hr/>
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
                <div style={{width: '60%', float: 'left'}}>
                    <div>
                        <h4>
                            <b>Diagnostico do Paciente</b>
                        </h4>
                    </div>
                    <br/>
                    <hr/>
                    <div style={{width: '100%'}}>
                        <p>
                            O paciente relatou os seguintes sintomas, febre, dor de cabeça, perca de paladar.
                            O paciente possui as seguintes condições de saúde, possui obesidade, glicose alta...
                        </p>
                    </div>
                </div>
                <div style={{width: '100%', float: 'left'}}>
                    <div className={classes.modal_footer}>
                        <Button
                            style={{border: '1px solid #ccc', marginTop: 100}}
                            onClick={() => closeModal()
                            }>Voltar</Button>
                    </div>
                </div>
            </div>
        </>
    );

    const Relatorios = () => {
        return (
            <>
                <div style={{backgroundColor: '#FFFFFF', padding: 15}}>
                    <h2>
                        Usuários
                    </h2>

                    <hr className="linha"/>

                    <div style={{margin: '5px 0', width: '100%', float: 'left'}}>
                        <div className="contentInput">
                            <input
                                type="text"
                                id="pesquisar"
                                placeholder="Pesquisar..."
                            />
                        </div>
                        <div className="contentInput">
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button className="contentButton" style={{backgroundColor: '#4CAF50', color: '#FFF'}}>
                                    <AddIcon/> Criar novo usuario
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div style={{height: 400, width: '100%'}}>
                        <ThemeProvider theme={theme}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                checkboxSelection
                            />
                        </ThemeProvider>
                    </div>

                    <Modal
                        id="any-unique-identifier"
                        isOpen={isModalOpen}
                        transition={ModalTransition.NONE}
                    >
                        <ModalContent/>
                    </Modal>


                </div>
            </>
        );
    }

    return (
        <ModalProvider>
            <Relatorios/>
        </ModalProvider>
    )
}


export default App;