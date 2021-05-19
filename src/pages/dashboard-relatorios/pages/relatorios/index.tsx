import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { DataGrid, GridColDef, GridValueFormatterParams, ptBR } from '@material-ui/data-grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select, Grid, NativeSelect, withStyles, InputBase, } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';
import 'react-simple-hook-modal/dist/styles.css';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import CheckIcon from '@material-ui/icons/Check';
import {
    Modal as Modal1,
    Modal as Modal2,
    ModalProvider,
    ModalTransition,
    useModal as useModalForm,
    useModal as useModalConfirm
} from 'react-simple-hook-modal';

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
            primary: { main: '#1976d2' },
        },
    },
    ptBR,
);

function Relatorios() {
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
        { id: 1, dataConsulta: '20-05-2021', firstName: 'Jon', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 2, dataConsulta: '20-05-2021', firstName: 'Cersei', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 3, dataConsulta: '20-05-2021', firstName: 'Jaime', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 4, dataConsulta: '20-05-2021', firstName: 'Arya', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 5, dataConsulta: '20-05-2021', firstName: 'Daenerys', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 6, dataConsulta: '20-05-2021', firstName: null, dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 7, dataConsulta: '20-05-2021', firstName: 'Ferrara', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 8, dataConsulta: '20-05-2021', firstName: 'Rossini', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 9, dataConsulta: '20-05-2021', firstName: 'Harvey', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 10, dataConsulta: '20-05-2021', firstName: 'Daenerys', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 11, dataConsulta: '20-05-2021', firstName: null, dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 12, dataConsulta: '20-05-2021', firstName: 'Ferrara', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 13, dataConsulta: '20-05-2021', firstName: 'Rossini', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
        { id: 14, dataConsulta: '20-05-2021', firstName: 'Harvey', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu' },
    ];

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'dataConsulta', headerName: 'Data consulta', width: 150 },
        { field: 'firstName', headerName: 'Nome do Paciente', width: 280 },
        { field: 'dataNascimento', headerName: 'Data de Nascimento', width: 170 },
        { field: 'situacao', headerName: 'Situação', width: 150 },
        {
            field: 'teste',
            width: 170,
            headerName: 'Relatório',
            renderCell: (params: GridValueFormatterParams) => {
                return (
                    <>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Ação</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={""} onClick={modalForm1.openModal} >Visualizar</MenuItem>
                                <MenuItem value={""}>Exportar</MenuItem>
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
                    Relatórios
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
                            onClick={modalForm2.openModal}
                            >
                                <FilterNoneIcon style={{ marginRight: 10 }} /> Selecionar filtros
                            </Button>
                        </div>
                    </div>
                </div>

                <div style={{ height: 600, width: '100%' }}>
                    <ThemeProvider theme={theme}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={8}
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

                <>
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
                </>

            </Modal1>

            <Modal2
                id="modal-2"
                isOpen={modalForm2.isModalOpen}
                transition={ModalTransition.NONE}
            >
                <>
                    <div style={{ width: '100%', float: 'left' }}>
                        <div>
                            <div style={{ fontSize: 25 }}>Selecione os filtros</div>
                            <hr className="linha" />
                        </div>
                    </div>
                    <div style={{ marginLeft: 25, width: '90%' }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={6}>
                                <label style={{ marginLeft: 20 }}><b>Data de consulta:</b></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    style={{ width: '80%' }}
                                >
                                    <option value={10}>Não selecionado</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label style={{ marginLeft: 20 }}><b>Idade:</b></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    style={{ width: '80%' }}
                                >
                                    <option value={10}>Não selecionado</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label style={{ marginLeft: 20 }}><b>Situação:</b></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    style={{ width: '80%' }}
                                >
                                    <option value={10}>Não selecionado</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label style={{ marginLeft: 20 }}><b>Bairro:</b></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    style={{ width: '80%' }}
                                >
                                    <option value={10}>Não selecionado</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label style={{ marginLeft: 20 }}><b>Rua:</b></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    style={{ width: '80%' }}
                                >
                                    <option value={10}>Não selecionado</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <label style={{ marginLeft: 20 }}><b>Sexo:</b></label>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                    style={{ width: '80%' }}
                                >
                                    <option value={10}>Não selecionado</option>
                                </NativeSelect>
                            </Grid>
                            <Grid item xs={12} md={12}></Grid>
                        </Grid>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{ width: '100%', float: 'left' }}>
                            <div className={classes.modal_footer}>
                                <Button
                                    style={{ border: '1px solid #ccc' }}
                                    onClick={modalForm2.closeModal}
                                    ><CheckIcon /> Confirmar</Button>
                            </div>
                        </div>
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


export default Relatorios;