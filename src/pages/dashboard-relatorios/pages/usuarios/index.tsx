import React, { useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { DataGrid, GridColDef, GridValueFormatterParams, ptBR } from '@material-ui/data-grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, FormControl, InputLabel, MenuItem, Select, Grid, TextField, withStyles, InputBase, InputAdornment } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import './style.css';
import 'react-simple-hook-modal/dist/styles.css';
import {
    Modal as ModalConfirm,
    Modal as ModalDelete,
    Modal as ModalVisualizar,
    Modal as ModalEditar,
    Modal as ModalCriar,
    ModalProvider,
    ModalTransition,
    useModal as useModalForm,
    useModal as useModalConfirm,
} from 'react-simple-hook-modal';
import iconAlert from '../../../../assets/images/alerta.png';
import iconAlertSucess from '../../../../assets/images/alerta-sucess.png';

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
        },
        margin: {
            margin: theme.spacing(1),
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

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

function App() {
    const classes = useStyles();
    //const {isModalOpen, openModal, closeModal} = useModal();
    const modalFormVisualizar = useModalForm();
    const modalFormEditar = useModalForm();
    const modalFormCriar = useModalForm();
    const modalForm3 = useModalForm();
    const modalConfirmCriar = useModalConfirm();
    const modalConfirmEditar = useModalConfirm();
    const modalConfirmDeletar = useModalConfirm();

    const [age, setAge] = React.useState('');

    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    const handleChangePassword = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
                                <MenuItem value={""} onClick={modalFormVisualizar.openModal}>Visualizar</MenuItem>
                                <MenuItem value={""} onClick={modalConfirmDeletar.openModal}>Deletar</MenuItem>
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
                                onClick={modalFormCriar.openModal}>
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

            <ModalVisualizar
                id="modal-visualizar"
                isOpen={modalFormVisualizar.isModalOpen}
                transition={ModalTransition.NONE}
            >
                <div>
                    <p style={{ fontSize: 25 }} >Visualizar</p>
                    <hr className="linha" />
                    <h3>Perfil do Usuário</h3>
                </div>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className={classes.label}>
                        Nome
                            </Grid>
                    <Grid item xs={12} md={9}>
                        Nicholas Ng
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        Email
                            </Grid>
                    <Grid item xs={12} md={9}>
                        nich@virtualspirit.me
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        Tipo de Usuário
                            </Grid>
                    <Grid item xs={12} md={9}>
                        Recepção
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        RG
                            </Grid>
                    <Grid item xs={12} md={9}>
                        00000000-0
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        CPF
                            </Grid>
                    <Grid item xs={12} md={9}>
                        000.000.000-00
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        Contato
                            </Grid>
                    <Grid item xs={12} md={9}>
                        (00) 00000-0000
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        Data de Nascimento
                            </Grid>
                    <Grid item xs={12} md={9}>
                        dd/mm/aaaa
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        CEP
                            </Grid>
                    <Grid item xs={12} md={9}>
                        00000-000
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        Endereço
                            </Grid>
                    <Grid item xs={12} md={9}>
                        Rua Sei lá
                        </Grid>

                    <Grid item xs={12} md={3} className={classes.label}>
                        Nº
                            </Grid>
                    <Grid item xs={12} md={9}>
                        38
                        </Grid>

                    <Grid item md={12}>
                        <Button style={{ border: '1px solid', color: '#4F5256', marginRight: 5 }}
                            onClick={modalFormVisualizar.closeModal}
                            className={classes.btn}
                        >
                            <ArrowBackIcon style={{ marginRight: 10 }} /> Voltar
                                </Button>
                        <Button
                            style={{ backgroundColor: '#116ad7', marginRight: 5 }}
                            onClick={modalFormEditar.openModal}
                            className={classes.btn}
                        >
                            <EditIcon style={{ marginRight: 10 }} /> Editar
                                </Button>
                        <Button
                            style={{ backgroundColor: '#3b93ff', marginRight: 5 }}
                            onClick={modalForm3.openModal}
                            className={classes.btn}
                        >
                            <VisibilityIcon style={{ marginRight: 10 }} /> Visualizar Histórico
                                </Button>
                        <Button
                            style={{ backgroundColor: '#F44336' }}
                            onClick={modalConfirmDeletar.openModal}
                            className={classes.btn}
                        >
                            <DeleteIcon style={{ marginRight: 10 }} /> Deletar
                                </Button>
                    </Grid>
                </Grid>
            </ModalVisualizar>

            <ModalEditar
                id="modal-editar"
                isOpen={modalFormEditar.isModalOpen}
                transition={ModalTransition.NONE}
            >
                <>
                    <div>
                        <p style={{ fontSize: 25 }} >Editar</p>
                        <hr className="linha" />
                        <h3>Perfil do Usuário</h3>
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
                                placeholder="Nicolas Ng"
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
                                placeholder="Recepção"
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
                                placeholder="nich@virtualspirit.me"
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
                                placeholder="0000000-00"
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
                                placeholder="000.000.000-00"
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
                                placeholder="(00) 00000-0000"
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
                                placeholder="dd/mm/aaaa"
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
                                placeholder="000000-000"
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
                                placeholder="Rua Sei lá"
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
                                placeholder="38"
                            />
                        </Grid>

                        <Grid item xs={12} md={3} className={classes.label}>
                            Senha
                            </Grid>
                        <Grid item xs={4} md={3}>
                            <FormControl className={classes.textField} variant="outlined" size="small">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChangePassword('password')}
                                    placeholder="***************"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={3} className={classes.label}>
                            Confirmar Senha
                            </Grid>
                        <Grid item xs={4} md={3}>
                            <FormControl className={classes.textField} variant="outlined" size="small">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChangePassword('password')}
                                    placeholder="***************"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>

                        <Grid item md={12}>
                            <Button style={{ border: '1px solid', color: '#4F5256', marginRight: 5 }}
                                onClick={modalFormEditar.closeModal}
                                className={classes.btn}
                            >
                                <ArrowBackIcon style={{ marginRight: 10 }} /> Voltar
                                </Button>
                            <Button
                                style={{ backgroundColor: '#4CAF50' }}
                                onClick={modalConfirmEditar.openModal}
                                className={classes.btn}
                            >
                                <SaveIcon style={{ marginRight: 10 }} /> Confirmar
                                </Button>
                        </Grid>
                    </Grid>
                </>
            </ModalEditar>


            <ModalCriar
                id="modal-criar"
                isOpen={modalFormCriar.isModalOpen}
                transition={ModalTransition.NONE}
            >
                <>
                    <div>
                        <p style={{ fontSize: 25 }} >Criar</p>
                        <hr className="linha" />
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
                                onClick={modalFormCriar.closeModal}
                                className={classes.btn}
                            >
                                <ArrowBackIcon style={{ marginRight: 10 }} /> Voltar
                                </Button>
                            <Button
                                style={{ backgroundColor: '#4CAF50' }}
                                onClick={modalConfirmCriar.openModal}
                                className={classes.btn}
                            >
                                <SaveIcon style={{ marginRight: 10 }} /> Confirmar
                                </Button>
                        </Grid>
                    </Grid>
                </>
            </ModalCriar>

            <ModalConfirm
                id="modal-confirm-criar"
                modalClassName={classes.modal_confirm}
                isOpen={modalConfirmCriar.isModalOpen}
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
                            <img src={iconAlert} style={{ width: 65 }} />
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            <h2>Usuário criado com sucesso!</h2>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            className={classes.btn}
                            style={{ backgroundColor: '#4CAF50' }}
                            onClick={modalConfirmCriar.closeModal}
                        >
                            Ok
                            </Button>
                    </div>
                </>
            </ModalConfirm>

            <ModalConfirm
                id="modal-confirm-editar"
                modalClassName={classes.modal_confirm}
                isOpen={modalConfirmEditar.isModalOpen}
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
                            <img src={iconAlert} style={{ width: 65 }} />
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            <h2>Você tem certeza?</h2>
                        </div>
                        Você tem certeza que deseja alterar esses dados?
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button style={{ border: '1px solid', color: '#4F5256', marginRight: 5 }}
                            onClick={modalConfirmEditar.closeModal}
                            className={classes.btn}
                        >   
                            Cancelar
                            </Button>
                        <Button
                            className={classes.btn}
                            style={{ backgroundColor: '#F44336' }}
                            onClick={modalConfirmEditar.closeModal}
                        >
                            Sim, Alterar!
                            </Button>
                    </div>
                </>
            </ModalConfirm>

            <ModalConfirm
                id="modal-confirm-criar"
                modalClassName={classes.modal_confirm}
                isOpen={modalConfirmCriar.isModalOpen}
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
                            <img src={iconAlertSucess} style={{ width: 65 }} />
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            <h2>Usuário criado com sucesso!</h2>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            className={classes.btn}
                            style={{ backgroundColor: '#4CAF50' }}
                            onClick={modalConfirmCriar.closeModal}
                        >
                            Ok
                            </Button>
                    </div>
                </>
            </ModalConfirm>

            <ModalDelete
                id="modal-confirm-delete"
                modalClassName={classes.modal_confirm}
                isOpen={modalConfirmDeletar.isModalOpen}
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
                            <img src={iconAlert} style={{ width: 65 }} />
                        </div>
                        <div style={{ margin: '10px 0' }}>
                            <h2>Você tem certeza?</h2>
                        </div>
                        Você estará excluindo esse perfil permanentemente!
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button style={{ border: '1px solid', color: '#4F5256', marginRight: 5 }}
                            onClick={modalConfirmDeletar.closeModal}
                            className={classes.btn}
                        >   
                            Cancelar
                            </Button>
                        <Button
                            className={classes.btn}
                            style={{ backgroundColor: '#F44336' }}
                            onClick={modalConfirmDeletar.closeModal}
                        >
                            Sim, deletar!
                            </Button>
                    </div>
                </>
            </ModalDelete>
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