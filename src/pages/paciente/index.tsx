import React from 'react';
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
import {Link} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import avatar from '../../assets/images/avatar.png';
import Mapa from '../../assets/images/Mapa.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import './style.css';

const drawerWidth = 280;

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
                <ListItem button>
                    <ListItemIcon style={{color: 'var(--color-text-green)'}}><AssignmentIcon/></ListItemIcon>
                    <ListItemText primary={'Solicitar Atendimento'}/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon style={{color: 'var(--color-text-green)'}}><SettingsIcon/></ListItemIcon>
                    <ListItemText primary={'Configuração'}/>
                </ListItem>
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
            <AppBar position="static" color='inherit' className="barra-menu">
                <Toolbar variant="dense">
                    <Link to="/">
                        <IconButton edge="start" style={{color: 'var(--color-text-green)'}}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <div className="appbar-content">
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
                    <div className={classes.toolbar}>
                        <div className="box-info">
                            <div className="box">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <p className="text-box">
                                            Numero atual do atendimento:
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                         <span className="numero" style={{background: 'black'}}>
                                    32
                                </span>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="box">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <p className="text-box">
                                            Seu numero de atendimento:
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                         <span className="numero" style={{background: 'green'}}>
                                    45
                                </span>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="box">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <p className="text-box">
                                            Você chegará em:
                                        </p>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <span>20 minutos</span>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={Mapa} style={{width: '75%', marginTop : 15}}/>
                    </div>
                </main>
            </div>
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
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(1),
        },
    }),
);

export default Administrativo;