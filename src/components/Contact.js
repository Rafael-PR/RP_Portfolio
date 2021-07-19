import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ContactForm from './ContactForm';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
    
    //+++ Container +++++++++++++++++++++++++++++++++++++++++
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        //height: '100vh',
        background: '#E8E8DB',
    },

    outerframe: {
        display:'flex',
        justifyContent:'center',
        padding:'2rem'
    }, 
    
    frame: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth:'60rem',
        background: 'rgba(0,0,0,0.3)',
        padding:'1rem',
        marginTop:'4rem'
    },

    //+++ Section 1 +++++++++++++++++++++++++++++++++++++++++++++
    
    paperbg:{
        background: '#5D5C53',
        padding:'5px',
        display:'flex',
        width:'99%',
        
    },
    
    adressIcon: {
        color:"#FFFFFF",
        marginRight:"1rem",
        fontSize: '1.2rem',  
    },
    
    headerBgLeft: {
        background: '#5D5C53',
        borderBottomLeftRadius:"8px",
        borderTopLeftRadius:"8px",
    },
    headerBgRight: {
        background: '#5D5C53',
        borderBottomRightRadius:"8px",
        borderTopRightRadius:"8px",
    },

    //+++ Section 2 +++++++++++++++++++++++++++++++++++++++++++++    

    main:{
        margin:'1px',
        justifyContent:'center',
        alignItems:'center',
    },

    sendMessageBg:{
        background: '#5D5C53',
        padding:'5px',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
    },

    //+++ Section 3 +++++++++++++++++++++++++++++++++++++++++++++   

    icons:{
        marginLeft:'5px',
        marginRight:'10px',
        color:'#ffffff',
        fontSize:"1.4rem",
    },

    gitHubBg: {
        display:'flex',
        justifyContent:'center',
        fontSize: '2.0rem',
    },

     //+++ Section 4 +++++++++++++++++++++++++++++++++++++++++++++  

    withLove:{
        direction:'flex',
        fontFamily: 'Poppins',
        fontSize: '1.0rem',
        textAlign:'center',
        color:'#FFFFFF'
    },

    kontaktBg: {
        display:'flex',
        justifyContent:'center'
    },

    divider: {
        background:'#FFDF65',
        marginTop:'1rem',
        marginBottom:'1rem'

    },

  }));
  


const Contact = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.root} id="Contact">
            
            <ThemeProvider theme={theme}>
                <Grid className={classes.outerframe}>
                    <Grid container xs={12} spacing={1}  className={classes.frame} >
                    
            {/* +++++++++++++++  Section 1 => Name & Adress +++++++++++++++++++++++++++++++++++*/}

                        <Grid xs={12} sm={6} lg={8} className={classes.headerBgLeft}>
                            <Box pl={3} pt={2} >
                                <Typography color="primary" variant="h5" align="left">Rafael Primas</Typography>
                                <Typography color="primary" variant="h6" align="left">Full Stack Developer</Typography>
                            </Box>    
                        </Grid>

                        <Grid xs={12} sm={6} lg={4} className={classes.headerBgRight}>
                            <Box pl={1} >
                                <List className={classes.list}>
                                    <ListItem >
                                        <FontAwesomeIcon icon="map-marker-alt" className={classes.adressIcon}/>
                                        <Typography color="primary" variant="body1">Wien</Typography>
                                    </ListItem>        

                                    <ListItem>
                                        <FontAwesomeIcon icon="phone-square-alt" className={classes.adressIcon}/>
                                        <Typography color="primary" variant="body1">+43 676 4941303</Typography>
                                    </ListItem>
                                                    
                                    <ListItem>
                                        <FontAwesomeIcon icon="at"className={classes.adressIcon}/>
                                        <Typography color="primary" variant="body1">rafael.primas@gmail.com</Typography>
                                    </ListItem>
                                </List>
                            </Box>     
                        </Grid>      

                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid>
        {/* +++++++++++++++  Section 2 => Contact form Component +++++++++++++++++++++++++++++++++++*/}

                        <Grid item xs={12} className={classes.middle}>
                            <Paper className={classes.sendMessageBg}>
                                <ListItem className={classes.kontaktBg}>
                                    <FontAwesomeIcon icon="address-card" className={classes.icons}/>
                                    <Typography variant="h6" color="primary">Kontakt</Typography>
                                </ListItem>
                            </Paper>
                        </Grid>
                        
                        <Grid item xs={12} className={classes.middle}>
                            {/* <Paper className={classes.sendMessageBg}> */}
                                <Typography variant="body1" color="primary">Suchen Sie Verstärkung für Ihr Team / Projekt oder wollen einfach "Hallo" sagen ?  :</Typography>
                                <Typography variant="body1" color="primary">Nutzen Sie gerne das Kontaktformular hier oder senden mir direkt eine Email an rafael.primas@gmail.com</Typography>
                            {/* </Paper> */}
                        </Grid>

                        <Grid item xs={12} >
                            <Divider className={classes.divider}/>
                        </Grid>

                        <Grid item xs={12} className={classes.middle}>
                            <Paper className={classes.sendMessageBg}>
                            <Typography variant="body1" color="primary">"Say Hello"</Typography>
                            </Paper>
                        </Grid>

                        <Grid item container xs={12} className={classes.main}>
                            <ContactForm/>              
                        </Grid>

                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid>

        {/* +++++++++++++++  Section 3 => Logo - GitHub/LinkedIn/Stackoverflow +++++++++++++++++++++++++++++++++++*/}

                    <Grid item xs={12} className={classes.middle}>
                        <Paper className={classes.paperbg}>

                            <Grid item xs={12} className={classes.gitHubBg}>
                                <Link href="https://github.com/Rafael-PR" target="_blank" className={classes.icons}>
                                    <FontAwesomeIcon  icon={['fab','github-square']}/>
                                </Link>
                                <Link href="https://www.linkedin.com/in/rafael-primas/" target="_blank" className={classes.icons}>
                                    <FontAwesomeIcon  icon={['fab','linkedin']}/>
                                </Link>
                                <Link href="https://stackoverflow.com/users/16007116/rafael?tab=profile" target="_blank" className={classes.icons}>
                                    <FontAwesomeIcon  icon={['fab','stack-overflow']}/>
                                </Link>
                            </Grid>

                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider className={classes.divider}/>
                    </Grid>

        {/* +++++++++++++++  Section 4 => Logo - Greetz from the Coder +++++++++++++++++++++++++++++++++++*/}


                    <Grid item xs={12} sm={12}className={classes.withLove}> 
                        Coded with ♥︎ by Rafael Primas
                    </Grid> 

                    
        {/* +++++++++++++++  END +++++++++++++++++++++++++++++++++++*/}           
                    
                    
                
                </Grid>
            </Grid>
        </ThemeProvider>
    </div>
    )
}

export default Contact
