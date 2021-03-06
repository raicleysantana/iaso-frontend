import React, {useState, useEffect} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {DataGrid, GridColDef, GridValueFormatterParams, ptBR} from '@material-ui/data-grid';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';
import {ModalProvider, Modal, useModal, ModalTransition} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import FilterNoneIcon from '@material-ui/icons/FilterNone';

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
        }
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
        {id: 1, dataConsulta: '20-05-2021', firstName: 'Jon', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {id: 2, dataConsulta: '20-05-2021', firstName: 'Cersei', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {id: 3, dataConsulta: '20-05-2021', firstName: 'Jaime', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {id: 4, dataConsulta: '20-05-2021', firstName: 'Arya', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {
            id: 5,
            dataConsulta: '20-05-2021',
            firstName: 'Daenerys',
            dataNascimento: 'dd/mm/yyyy',
            situacao: 'Compareceu'
        },
        {id: 6, dataConsulta: '20-05-2021', firstName: null, dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {id: 7, dataConsulta: '20-05-2021', firstName: 'Ferrara', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {id: 8, dataConsulta: '20-05-2021', firstName: 'Rossini', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
        {id: 9, dataConsulta: '20-05-2021', firstName: 'Harvey', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    ];

    const {isModalOpen, openModal, closeModal} = useModal();

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'dataConsulta', headerName: 'Data consulta', width: 150},
        {field: 'firstName', headerName: 'Nome do Paciente', width: 350},
        {field: 'dataNascimento', headerName: 'Data de Nascimento', width: 200},
        {field: 'situacao', headerName: 'Situa????o', width: 150},
        {
            field: 'teste',
            width: 170,
            headerName: 'Relat??rios',
            renderCell: (params: GridValueFormatterParams) => {
                return (<Button
                        className={"btn-visualizar"}
                        onClick={openModal}
                    >
                        <VisibilityIcon
                            style={{width: 20, marginRight: 5}}/>
                        Visualizar
                    </Button>
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
                            <b>Informa????es do paciente</b>
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
                            O paciente relatou os seguintes sintomas, febre, dor de cabe??a, perca de paladar.
                            O paciente possui as seguintes condi????es de sa??de, possui obesidade, glicose alta...
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
                        Relat??rios
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
                                <Button className="contentButton"
                                        style={{backgroundColor: '#03A9F4', color: '#FFF', marginRight: 5}}>
                                    <AssignmentReturnedIcon/> Exportar Hist??rico
                                </Button>
                                <Button className="contentButton" style={{backgroundColor: '#4CAF50', color: '#FFF'}}>
                                    <FilterNoneIcon/> Selecionar filtro
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