import React, {Suspense, lazy} from 'react';
import {
    AppBar,
    Divider, Drawer, Grid, Hidden,
    IconButton, List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@material-ui/core";
import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import avatar from '../../assets/images/avatar.png';
import logo from '../../assets/images/logo.png';
import './style.css';
import Dashboard from './pages/dashboard';
import Configuracao from './pages/configuracao';
import Relatorios from './pages/relatorios';
import Usuarios from './pages/usuarios';

const drawerWidth = 280;

const routes = [

    {
        path: "/dashboard-relatorios",
        exact: true,
        sidebar: () => <div>Dashboard</div>,
        main: () => <Dashboard/>
    },
    {
        path: "/dashboard-relatorios/configuracao",
        sidebar: () => <div>Configuração</div>,
        main: () => <Configuracao/>,
    },
    {
        path: "/dashboard-relatorios/relatorios",
        sidebar: () => <div>Relatorios</div>,
        main: () => <Relatorios/>,
    },
    {
        path: "/dashboard-relatorios/usuarios",
        sidebar: () => <div>Usuários</div>,
        main: () => <Usuarios/>,
    }

];

interface Props {
    window?: () => Window;
}

function Administrativo(props: Props) {
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (

        <div>
            <div id="toolbar" className={classes.toolbar}>
                <div className="avatar">
                    <img src={avatar} style={{width: 50}}/>
                    <Typography variant="h6" style={{color: 'var(--color-text-gray)'}}>
                        Usuário
                    </Typography>
                </div>
            </div>
            <Divider/>
            <List>
                <Link to="/dashboard-relatorios" className="link">
                    <ListItem button>
                        <ListItemIcon style={{color: 'var(--color-text-green)'}}><AssignmentIcon/></ListItemIcon>
                        <ListItemText primary={'Dashboard'}/>
                    </ListItem>
                </Link>
                <Link to="/dashboard-relatorios/relatorios" className="link">
                    <ListItem button>
                        <ListItemIcon style={{color: 'var(--color-text-green)'}}><AssignmentIcon/></ListItemIcon>
                        <ListItemText primary={'Relatórios'}/>
                    </ListItem>
                </Link>
                <Link to="/dashboard-relatorios/usuarios" className="link">
                    <ListItem button>
                        <ListItemIcon style={{color: 'var(--color-text-green)'}}><AssignmentIcon/></ListItemIcon>
                        <ListItemText primary={'Usuários'}/>
                    </ListItem>
                </Link>
                <Link to="/dashboard-relatorios/configuracao" className="link">
                    <ListItem button>
                        <ListItemIcon style={{color: 'var(--color-text-green)'}}><SettingsIcon/></ListItemIcon>
                        <ListItemText primary={'Configuração'}/>
                    </ListItem>
                </Link>
            </List>
            <Divider/>
            <List>
                <ListItem button>
                    <ListItemIcon style={{color: 'var(--color-text-green)'}}><PowerSettingsNewIcon/></ListItemIcon>
                    <ListItemText primary={'Sair'}/>
                </ListItem>
            </List>
        </div>

    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Router>
                <AppBar position="static" color='inherit' className="barra-menu">
                    <Toolbar variant="dense">
                        <img src={logo} style={{width: 45}}/>
                        <span style={{color: 'var(--color-text-green)', fontWeight: 600}}>
                        IASO - Sistema de Atendimento
                    </span>
                        <div className="appbar-content" style={{width: '60%'}}>
                            <Typography variant="h6" style={{color: 'var(--color-text-gray)'}}>
                                Fila virtual
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className={classes.root}>

                    <nav className={classes.drawer} aria-label="mailbox folders">
                        {/*The implementation can be swapped with js to avoid SEO duplication of links.*/}
                        <Hidden smUp implementation="css">
                            <Drawer
                                container={container}
                                variant="temporary"
                                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden xsDown implementation="css">
                            <Drawer
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                    </nav>

                    <main className={classes.content}>

                        <Switch>
                            {
                                routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main/>}
                                    />
                                ))
                            }
                        </Switch>
                    </main>
                </div>

            </Router>
        </>

    )
}

/*
    estilos
*/
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            position: 'relative',
            marginTop: 10,
            height: '100vh'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(1),
        },
    }),
);

export default Administrativo;