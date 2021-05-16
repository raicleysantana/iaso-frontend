import React from 'react';
import {Link} from 'react-router-dom';
import {
    Card,
    CardContent,
    Grid,
    makeStyles,
    withStyles,
    Theme,
    createStyles,
    MuiThemeProvider,
    createMuiTheme,
    TextField,
    Button,
    NativeSelect,
    InputBase,
} from '@material-ui/core';

import {green} from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';

import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LaunchIcon from '@material-ui/icons/Launch';
import SearchIcon from '@material-ui/icons/Search';

import {ModalProvider, Modal, useModal, ModalTransition} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';

import './style.css';

interface Data {
    numero: string;
    nome: string;
    rg: string;
    nascimento: string;
    status: string;
}

function createData(
    numero: string,
    nome: string,
    rg: string,
    nascimento: string,
    status: string,
): Data {
    return {numero, nome, rg, nascimento, status};
}

const rows = [
    createData('001', 'Jorge da Silva de Sei lá', '9999999-9', 'dd/mm/aaaa', 'Compareceu'),
    createData('002', 'Maestro de Sá', '9999999-9', 'dd/mm/aaaa', 'Não compareceu'),
    createData('003', 'Fulano de Tal da Silva Costa', '9999999-9', 'dd/mm/aaaa', 'Conferindo'),
    createData('004', 'Hossana Guedelha Maranhão', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('005', 'Iara Cirne Paranhos', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('006', 'Roberto Travassos Lima', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('007', 'Camila Patrício Fraga', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('008', 'Américo Adão Toledo', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('009', 'Marco Pinhal Ferro', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('010', 'Anastasia Milheiriço Santos', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('011', 'Cael Bouça Leiria', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('012', 'Teste', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
    createData('013', 'Teste2', '9999999-9', 'dd/mm/aaaa', 'Em espera'),
];

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: HeadCell[] = [
    {id: 'numero', numeric: true, disablePadding: false, label: 'Número'},
    {id: 'nome', numeric: false, disablePadding: true, label: 'Nome'},
    {id: 'rg', numeric: true, disablePadding: false, label: 'RG'},
    {id: 'nascimento', numeric: true, disablePadding: false, label: 'Data de Nascimento'},
    {id: 'status', numeric: true, disablePadding: false, label: 'Status'},
];

interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const greenTheme = createMuiTheme({palette: {primary: green}})

function ChecagemPaciente() {

    const [age, setAge] = React.useState('');


    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    const {isModalOpen, openModal, closeModal} = useModal();

    interface EnhancedTableToolbarProps {
        numSelected: number;
    }

    const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
        const classes = useToolbarStyles();

        return (
            <Toolbar>
                <Typography className={classes.esq} id="tableTitle">
                    <Typography variant="subtitle2">Fila de Pacientes</Typography>
                    <Typography className={classes.dataatual}>Data_Atual</Typography>
                </Typography>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Pesquisar..."
                    variant="outlined"
                    size="small"
                    className={classes.center}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
                <MuiThemeProvider theme={greenTheme}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.dir}
                        startIcon={<LaunchIcon/>}
                        onClick={openModal}
                    > Selecionar Filtros
                    </Button>
                </MuiThemeProvider>
            </Toolbar>
        );
    };

    const ModalContent = () => (
        <>
            <div style={{width: '100%', float: 'left'}}>
                <div>
                    <div style={{fontSize: 25}}>Selecione os filtros</div>
                    <hr className="linha"/>
                </div>
            </div>
            <div style={{marginLeft: 25, width: '90%'}}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <label style={{marginLeft: 20}}><b>Data de consulta:</b></label>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput/>}
                            style={{width: '80%'}}
                        >
                            <option value={10}>Não selecionado</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <label style={{marginLeft: 20}}><b>Idade:</b></label>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput/>}
                            style={{width: '80%'}}
                        >
                            <option value={10}>Não selecionado</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <label style={{marginLeft: 20}}><b>Situação:</b></label>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput/>}
                            style={{width: '80%'}}
                        >
                            <option value={10}>Não selecionado</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <label style={{marginLeft: 20}}><b>Bairro:</b></label>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput/>}
                            style={{width: '80%'}}
                        >
                            <option value={10}>Não selecionado</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <label style={{marginLeft: 20}}><b>Rua:</b></label>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput/>}
                            style={{width: '80%'}}
                        >
                            <option value={10}>Não selecionado</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <label style={{marginLeft: 20}}><b>Sexo:</b></label>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <NativeSelect
                            id="demo-customized-select-native"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput/>}
                            style={{width: '80%'}}
                        >
                            <option value={10}>Não selecionado</option>
                        </NativeSelect>
                    </Grid>
                    <Grid item xs={12} md={12}></Grid>
                </Grid>
            </div>
            <div style={{position: 'relative'}}>
                <div style={{width: '100%', float: 'left'}}>
                    <div className={classes.modal_footer}>
                        <Button
                            style={{border: '1px solid #ccc'}}
                            onClick={() => closeModal()
                            }><CheckIcon/> Confirmar</Button>
                    </div>
                </div>
            </div>
        </>
    );

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(11);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [orderBy, setOrderBy] = React.useState<keyof Data>('rg');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [dense, setDense] = React.useState(true);

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        /* if (selectedIndex === -1) {
           newSelected = newSelected.concat(selected, name);
         } else if (selectedIndex === 0) {
           newSelected = newSelected.concat(selected.slice(1));
         }  else if (selectedIndex > 0) {
           newSelected = newSelected.concat(
             selected.slice(0, selectedIndex),
             selected.slice(selectedIndex + 1),
           );
         }*/

        setSelected(newSelected);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const Filtros = () => {
        return (
            <>
                <Modal
                    id="any-unique-identifier"
                    isOpen={isModalOpen}
                    transition={ModalTransition.NONE}
                    modalClassName="modal"
                >
                    <ModalContent/>
                </Modal>
            </>
        );
    }

    return (<>
            <ModalProvider>
                <Filtros/>
            </ModalProvider>
            <div className="cards">
                <Card className="card-info">
                    <CardContent>
                        <Grid>
                            <Typography variant="h6" style={{textAlign: 'center'}}>
                                Informações do Paciente
                            </Typography>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Nome:</label></div>
                                <div>Fulano de Tal da Silva Costa</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Data de Nascimento:</label></div>
                                <div>01/02/1996</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Sexo:</label></div>
                                <div>Masculino</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Endereço:</label></div>
                                <div>Rua Margarida nº00, Centro</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Contato:</label></div>
                                <div>(00) 00000-0000</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>Carteira do SUS:</label></div>
                                <div>000 0000 0000 0000</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>CPF:</label></div>
                                <div>000.000.000-00</div>
                            </div>
                            <div className={classes.info}>
                                <div><label className={classes.labelGray}>RG:</label></div>
                                <div>0000000-0</div>
                            </div>
                            <Button
                                style={{
                                    float: 'left',
                                    marginTop: 20,
                                    maxWidth: '130px',
                                    maxHeight: '50px',
                                    fontSize: 14,
                                    width: '80%'
                                }}
                                className="btn-primary"
                            >
                                Não Compareceu
                            </Button>
                            <Button
                                style={{
                                    float: 'right',
                                    marginTop: 20,
                                    maxWidth: '120px',
                                    minHeight: '50px',
                                    fontSize: 14
                                }}
                                variant="contained"
                                color="primary"
                                className="btn-primary"
                            >
                                Compareceu
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>

                <Card className="card-lista">
                    <CardContent>
                        <Grid>
                            <Paper>
                                <EnhancedTableToolbar numSelected={selected.length}/>
                                <TableContainer>
                                    <Table
                                        className={classes.table}
                                        aria-labelledby="tableTitle"
                                        size={dense ? 'small' : 'medium'}
                                        aria-label="enhanced table"
                                    >
                                        <EnhancedTableHead
                                            classes={classes}
                                            numSelected={selected.length}
                                            orderBy={orderBy}
                                            rowCount={rows.length}
                                        />
                                        <TableBody>
                                            {rows
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row, index) => {
                                                    const isItemSelected = isSelected(row.nome);
                                                    const labelId = `enhanced-table-checkbox-${index}`;

                                                    return (
                                                        <TableRow
                                                            hover
                                                            onClick={(event) => handleClick(event, row.nome)}
                                                            aria-checked={isItemSelected}
                                                            tabIndex={-1}
                                                            key={row.nome}
                                                            selected={isItemSelected}
                                                        >
                                                            <TableCell align="left">{row.numero}</TableCell>
                                                            <TableCell component="th" id={labelId} scope="row">
                                                                {row.nome}
                                                            </TableCell>
                                                            <TableCell align="right">{row.rg}</TableCell>
                                                            <TableCell align="right">{row.nascimento}</TableCell>
                                                            <TableCell align="right">{row.status}</TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            {emptyRows > 0 && (
                                                <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
                                                    <TableCell colSpan={6}/>
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                />
                            </Paper>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
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
});

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 15,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
)(TableRow);

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.type === 'light'
                ? {
                    color: theme.palette.secondary.main,
                    backgroundColor: theme.palette.secondary.dark,
                }
                : {
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.secondary.dark,
                },
        title: {
            flex: '1 1 100%',
        },
        dataatual: {
            fontWeight: 'bold',
        },
        esq: {
            flexGrow: 40,
            flexShrink: 0,
            flexBasis: 0,
        },
        center: {
            flexGrow: 100,
            flexShrink: 0,
            flexBasis: 0,
            paddingRight: 20,
            minWidth: 400,
        },
        dir: {
            flexGrow: 60,
            flexShrink: 0,
            flexBasis: 0,
        },
        modal_footer: {
            position: 'relative',
        },
        labelGray: {
            color: "#999",
            marginBottom: 5,
        },
        info: {
            width: '100%',
            marginTop: 5,
            marginBottom: 5,
        },
    }),
);

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

export default ChecagemPaciente;