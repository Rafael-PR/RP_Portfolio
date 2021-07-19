import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioCard from './PortfolioCard';
import projects from '../static/data/projects';
import { Link as Scroll } from 'react-scroll';
import {Typography, Grid, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import theme from '../themes/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
    
    //+++ Container +++++++++++++++++++++++++++++++++++++++++
    root: {
        background: '#E8E8DB',
        height:'100%',
        width:'100%',
        // height: '100vh',
    },  
    outerframe: {
        display:'flex',
        justifyContent:'center',
        padding:'2rem'
    },
    frame:{
        display: 'flex',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.3)',
        maxWidth:'60rem',
        padding:'1rem',
        height:'100%',
        marginBottom:'4rem',
    },

    //+++ Section 1 +++++++++++++++++++++++++++++++++++++++++++++
    
    projekte:{
        display: 'flex',
        justifyContent: 'center',
        //background: 'rgba(0,0,0,0.3)',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color:'#ffffff',
        paddingTop:"8px",
        paddingBottom:"8px"
    },
    paperbg:{
        background: '#858377',
        padding:'5px',
        width:'100%',
        textAlign:'center'
    },
    paperbg2:{
        //background: '#858377',
        padding:'5px',
        width:'100%',
        //textAlign:'center'
        display:"flex",
        justifyContent:"center",
        
    },
    icons:{
        marginLeft:'5px',
        marginRight:'10px',
        color:'#FFFFFF',
        fontSize:"1.4rem"
    },

    divider: {
        background:'#FFDF65',
        marginBottom:'0.4rem'

    },
    //+++ Section 3 +++++++++++++++++++++++++++++++++++++++++++++

    goDown: {
        color: '#ffffff',
        fontSize: '3em',
        cursor: 'pointer',
    },  

}));



const Portfolio = () => {

    const classes = useStyles();
    // const checked = useWindowPosition('home');
    

    return (
        <div className={classes.root} id="Portfolio">
        <ThemeProvider theme={theme}>
            <Grid className={classes.outerframe}>
                <Grid container className={classes.frame}>

                {/* +++++++++++++++  Section 1 => Header +++++++++++++++++++++++++++++++++++*/}
                    <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                    </Grid>
                
                
                    <Grid item className={classes.projekte} xs={12}>
                        <Paper className={classes.paperbg}>
                            <ListItem className={classes.paperbg2}>
                                <FontAwesomeIcon icon="clipboard-check" className={classes.icons}/>
                                <Typography variant="h6" color="primary">Umgesetzte Projekte</Typography>
                            </ListItem>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                            <Divider className={classes.divider}/>
                    </Grid>

                {/* +++++++++++++++  Section 2 => Project Cards +++++++++++++++++++++++++++++++++++*/}
                
                <Grid item  xs={12} sm={6} md={4}>
                    <PortfolioCard project={projects[0]}   />
                </Grid>

                <Grid item  xs={12} sm={6} md={4}>
                    <PortfolioCard project={projects[1]}   />
                </Grid>

                <Grid item  xs={12} sm={6} md={4} >
                    <PortfolioCard project={projects[2]}  />
                </Grid>

                {/* +++++++++++++++  Section 3 => Arrow down +++++++++++++++++++++++++++++++++++*/}

                <Grid container justifyContent="center">
                    <Scroll to="Contact" smooth={true}>
                        <Box>
                            <FontAwesomeIcon className={classes.goDown} icon="chevron-down"/>
                        </Box>
                    </Scroll>
                </Grid>

                {/* +++++++++++++++  END +++++++++++++++++++++++++++++++++++*/}


                </Grid>
            </Grid>

        </ThemeProvider>
        </div>
    )
}

export default Portfolio
