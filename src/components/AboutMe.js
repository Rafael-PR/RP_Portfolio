import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import { Link as Scroll } from 'react-scroll';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import primas3 from '../static/images/primas3.jpg';
import FrontendCard from './FrontendCard';
import BackendCard from './BackendCard';
import PMCard from './PMCard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({

    //+++ Container +++++++++++++++++++++++++++++++++++++++++
    root: {
        background: '#E8E8DB',
    },

    outerframe: {
        display:'flex',
        justifyContent:'center',
        padding:'2rem',
        //background:'rgba(0,0,0,0.3)'
    }, 
    
    frame: {
        maxWidth:'60rem',
        background:'rgba(0,0,0,0.3)',
        padding:'1rem'
    },

    //+++ Section 1 +++++++++++++++++++++++++++++++++++++++++++++

    headerBgLeft: {
        background: 'rgba(0,0,0,0.3)',
        borderBottomLeftRadius:"8px",
        borderTopLeftRadius:"8px",
    },
    headerBgRight: {
        background: 'rgba(0,0,0,0.3)',
        borderBottomRightRadius:"8px",
        borderTopRightRadius:"8px",
    },  
    
    adressList: {
        color:"#FFFFFF"
    },
    
    adressIcon: {
        //color:"#FFFFFF",
        marginRight:"1rem",
        fontSize: '1.2rem',
    },  
    
    divider: {
        background:'#FFDF65',
        marginTop:'1rem',
        marginBottom:'1rem'

    },
    //+++ Section 2 +++++++++++++++++++++++++++++++++++++++++++++

    profilPic: {
        height: 150,
        width: 130,
        marginBottom:'5px',
        marginLeft:'1.5rem',
        borderRadius:"10px",
        marginTop:"0.2rem",
    },

    //+++ Section 3 +++++++++++++++++++++++++++++++++++++++++++++
    
    skillsBg: {
        display:'flex',
        // margin:'1px',
        justifyContent:'center',
        // alignItems:'center',
        // maxHeight:'50px',
    },
    
    itExperience:{
        background: 'rgba(0,0,0,0.3)',
        padding:'5px',
        textAlign:'center',
        marginTop:'0.3rem'
    },
    
    icons: {
        marginLeft:'5px',
        marginRight:'10px',
        color:'#ffffff',
        fontSize:"1.4rem"
    },
    
    main: {
        display:'flex',
        margin:'1px',
        justifyContent:'center',
        alignItems:'center',
    }, 
    
    cards: {
        display:'flex',
        justifyContent:'center'
    },

    //+++ Section 4 +++++++++++++++++++++++++++++++++++++++++++++
    
    iconBg: {
        background: 'rgba(0,0,0,0.3)',
        padding:'5px',
        display:'flex',
        width:'100%'
    },

    //+++ Section 5 +++++++++++++++++++++++++++++++++++++++++++++

    goDown: {
        color: '#ffffff',
        fontSize: '3em',
        cursor: 'pointer',
    },
    

  }));


const AboutMe = () => {

    const classes = useStyles();

    return (
        <div className={classes.root} id="About">
            <ThemeProvider theme={theme}>
                <Grid className={classes.outerframe}>
                    <Grid container xs={12} className={classes.frame} >
                    
                {/* +++++++++++++++  Section 1 => Name & Adress +++++++++++++++++++++++++++++++++++*/}

                            <Grid xs={12} sm={6} lg={8} className={classes.headerBgLeft}>
                                <Box pl={3} pt={2}>
                                <Typography color="primary" variant="h5" align="left">Rafael Primas</Typography>
                                <Typography color="primary" variant="h6" align="left">Full Stack Developer</Typography>
                                </Box>
                            </Grid>

                            <Grid xs={12} sm={6} lg={4} className={classes.headerBgRight}>
                                <Box pl={1}>
                                    <List className={classes.adressList}>
                                            <ListItem >
                                                <FontAwesomeIcon icon="map-marker-alt" className={classes.adressIcon}/>
                                                <Typography variant="body1">Wien</Typography>
                                            </ListItem>

                                            <ListItem>
                                                <FontAwesomeIcon icon="phone-square-alt" className={classes.adressIcon}/>
                                                <Typography variant="body1">+43 676 4941303</Typography>
                                            </ListItem>
                                                    
                                            <ListItem>
                                                <FontAwesomeIcon icon="at"className={classes.adressIcon}/>
                                                <Typography variant="body1">rafael.primas@gmail.com</Typography>
                                            </ListItem>
                                    </List>
                                </Box>                
                            </Grid>                

                    <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                    </Grid>                        

                {/* +++++++++++++++  Section 2 => Avatar & Introduction  +++++++++++++++++++++++++++++++++++*/}
                                        
                    <Grid container>
                        <Grid item xs={12} lg={2}>
                            <Avatar variant="rounded" src={primas3} className={classes.profilPic}></Avatar>
                        </Grid>

                        <Grid item xs={12} lg={10}>
                            <Box pl={3} pt={1}>
                                <Typography color="primary" align="left" variant="body1" display="block">
                                    "Ich bin ein erfahrener Vertriebler, der schon immer eine Affinität für IT und speziell Programmieren hatte und nun den Schritt zum Full-Stack Developer gegangen ist.
                                    Leidenschaftlich daran interessiert, neue Technologien zu lernen, Ideen zum Leben zu erwecken und mit engagierten Teams zusammenzuarbeiten.
                                    Versiert im Erstellen von responsiven Web-Applikationen, Frontend als auch Backend Seitig."
                                </Typography>
                            </Box>
                        </Grid>
    
                        <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                        </Grid> 
                    </Grid>

                {/* +++++++++++++++  Section 3 => IT Experience & Cards  +++++++++++++++++++++++++++++++++++*/}


                    <Grid xs={12} className={classes.skillsBg}>
                            <Paper className={classes.itExperience}>
                                <ListItem>
                                    <FontAwesomeIcon icon="cubes" className={classes.icons}/>
                                    <Typography variant="h6" color="primary">Skills</Typography>
                                </ListItem>
                            </Paper>
                    </Grid>    

                    <Grid item container xs={12} className={classes.main}>  
                        <Grid item xs={12} sm={4} className={classes.cards}>
                            <FrontendCard/>
                        </Grid >
                        <Grid item xs={12} sm={4} className={classes.cards}>
                            <BackendCard/>
                        </Grid>
                        <Grid item xs={12} sm={4} className={classes.cards}>
                            <PMCard/>
                        </Grid>      
                    </Grid>

                    <Grid item xs={12}>
                                <Divider className={classes.divider}/>
                    </Grid> 

                {/* +++++++++++++++  Section 4 => Icons - GitHub/LinkedIn/Stackoverflow  +++++++++++++++++++++++++++++++++++*/}

                    <Grid xs={12} className={classes.middle}>
                        <Paper className={classes.iconBg}>
                            <Grid item xs={12} >
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

                {/* +++++++++++++++  Section 5 => Arrow to Portfolio  +++++++++++++++++++++++++++++++++++*/}

                    <Grid container justifyContent="center">
                        <Scroll to="Portfolio" smooth={true}>
                            <Box>
                                <FontAwesomeIcon className={classes.goDown} icon="chevron-down"/>
                            </Box>
                        </Scroll>
                    </Grid>

                {/* +++++++++++++++  END  +++++++++++++++++++++++++++++++++++*/}

            </Grid>
        </Grid>

        </ThemeProvider> 
    </div>
    )
}

export default AboutMe
