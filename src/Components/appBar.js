import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import Logo from '../images/etickets_logo.png';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DehazeIcon from '@material-ui/icons/Dehaze';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

export default function ButtonAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({

        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.drawerMenu}>
                <div className={classes.menuItemDrawer}>
                    <HomeIcon style={{ color: '#fceae1' }} />
                    <Link className={classes.Links} to="/">Home </Link>
                </div>
                <div className={classes.menuItemDrawer}>
                    <MovieIcon style={{ color: '#00aeef' }} />
                    <Link className={classes.Links} to="/movies">Movies</Link>
                </div>
                <div className={classes.menuItemDrawer}>
                    <MusicVideoIcon style={{ color: '#64f24d' }} />
                    <Link className={classes.Links} to="/movies">Events</Link>
                </div>
                <div className={classes.menuItemDrawer}>
                    <AccountCircleIcon style={{ color: '#f5671f' }} />
                    <Link className={classes.Links} to="/movies">Login</Link>
                </div>
                
            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" classes={{ root: classes.abRoot, }}>
                <Container >
                    <Toolbar className={classes.appBarContainer}>
                        <img src={Logo} height={50} />
                        <div className={classes.desktopMenu}>
                            <div className={classes.menuItem}><HomeIcon style={{ color: '#fceae1' }} /><Link className={classes.Links} to="/">Home </Link></div>
                            <div className={classes.menuItem}><MovieIcon style={{ color: '#00aeef' }} /><Link className={classes.Links} to="/movies">Movies</Link></div>
                            <div className={classes.menuItem}><MusicVideoIcon style={{ color: '#64f24d' }} /><Link className={classes.Links} to="/movies">Events</Link></div>
                            <div className={classes.menuItem}><AccountCircleIcon style={{ color: '#f5671f' }} /><Link className={classes.Links} to="/movies">Login</Link></div>
                        </div>


                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={toggleDrawer(anchor, true)} aria-label="menu" className={classes.menuIcon}>
                                    <DehazeIcon style={{ color: '#fff' }} />
                                </IconButton>

                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                    classes={{ paper: classes.paper }}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </Toolbar>

                </Container>
            </AppBar>

        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    abRoot: {
        //backgroundColor: "#333345",
        backgroundColor: '#4d4d4d'

    },
    appBarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    loginButton: {
        marginLeft: 'auto'
    },
    Links: {
        textDecoration: 'none',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuIcon: {
        display: 'none',
        // Match [md, ∞)
        //       [960px, ∞)
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    desktopMenu: {
        display: 'flex',
        flexDirection: 'row',


        // Match [md, ∞)
        //       [960px, ∞)
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    LinksDrawer: {
        color: '#fff',
        textDecoration: 'none',
        marginBottom: 15
    },
    drawerMenu: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 15,
        paddingTop: 50,
    },
    paper: {
        background: "#4d4d4d"
    },
    menuItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    menuItemDrawer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    }
}));