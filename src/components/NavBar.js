import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link as Scroll } from 'react-scroll';
import Avatar from '@material-ui/core/Avatar';
import Logo_RP from '../static/images/Logo_RP.png';

const font ="'Poppins', sans-serif";


const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
    },

    button: {
        backgroundColor:"",
        margin:'0.1rem',
        marginTop:'2.5rem',
        fontFamily:font,
        fontSize:'0.9rem',
            color:"rgba(0,0,0,0.3)",
            '&:hover': {
                backgroundColor: '#FFDF65',
                borderColor: '#494846',
                color:'#494846',
                boxShadow: 'none',
            },
    },

    navBg: {
        justifyContent:'flex-end',
        paddingRight:'3rem',
        marginTop:'2rem',
    },

    logoBg: {
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-end",
        marginBottom:"0.5rem"
    },

    logo: {
        height: 60,
        width: 60,
        marginTop:20,
    },


  }));

const NavBar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="sticky" style={{ background: '#E8E8DB', boxShadow: 'none'}}>
                <Toolbar>
                    <Grid container xs={12}>
                        <Grid item xs={12} lg={2} className={classes.logoBg}>
                            <Avatar variant="rounded" src={Logo_RP} className={classes.logo}></Avatar>
                        </Grid>
                        <Grid item xs={12} lg={10} className={classes.navBg}>
                            <Box align="right">
                                <Button 
                                        className={classes.button}
                                        variant="text"
                                        color="primary"
                                        type="submit" 
                                        align="right"
                                        >
                                        <Scroll to="About" smooth={true}>      
                                            Über mich
                                        </Scroll>        
                                        
                                </Button>
                                <Button 
                                        className={classes.button}
                                        variant="text"
                                        color="primary"
                                        type="submit" 
                                        >
                                        <Scroll to="Portfolio" smooth={true}>      
                                            Portfolio
                                        </Scroll>    
                                </Button>
                                <Button 
                                        className={classes.button}
                                        variant="text"
                                        color="primary"
                                        type="submit" 
                                        >    
                                        <Scroll to="Contact" smooth={true}>
                                            Kontakt
                                        </Scroll>
                                </Button>
                            </Box>
                            <Box>
                                
                            </Box>
                        </Grid>

                    </Grid>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
