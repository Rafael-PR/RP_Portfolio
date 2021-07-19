import React , { useEffect,useState } from 'react';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Scroll } from 'react-scroll';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import { Collapse, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import primas from '../static/images/primas.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const useStyles = makeStyles((theme) => ({

    //+++ Container +++++++++++++++++++++++++++++++++++++++++
    root: {
        //display: 'flex',
        //justifyContent: 'center',
        //alignItems: 'center',
        //alignSelf:'center',
        textAlign:'center',
        //height: '100vh',
        // background: 'rgba(0,0,0,0.1)',
        //background:'#E8E8DB',
    }, 
    outerframe: {
        //display:'flex',
        justifyContent:'center',
        padding:'2rem',
        background:'#E8E8DB',
    },

    frame: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth:'90rem',
        background:'linear-gradient(90deg, #FFDF65 0%, #E8E8DB 55%)',
        padding:'3rem',
        marginTop:'10rem',
        marginBottom:'15rem',
        minHeight:'20rem',
        borderRadius:'15px'
    },

    small: {
        width: "3rem",
        height:"3rem",
    },

    avatar: {
        width: "13rem",
        height:"13rem",
    },

    goDown: {
        color: '#858377',
        fontSize: '3em',
        cursor: 'pointer',
    },
    boxBackground:{
        background: 'rgba(0,0,0,0.3)',
    },
    paperbg:{
        background: 'rgba(0,0,0,0.3)',
        padding:'5px',
        display:'flex',
        justifyContent:"center",
        width:'100%',
        minHeight:'20rem',
    },

    testBg: {
        display:"flex",
        background: 'rgba(0,0,0,0.3)',
        //alignItems:'center'
        justifyContent:'center',
    },

    avatarBg: {
        display:'flex',
        width:'40rem',
        background:'rgba(150,0,0,0.3)',
        
    },

    paperBg: {
        background:'rgba(0,0,0,0.3)',
        display:'flex',
        justifyContent:'center',
        minHeight:'15.5rem',
        borderTopLeftRadius:"8px",
        borderBottomLeftRadius:"8px",
    },

    paperBg2: {
        backgroundColor:'rgba(0,0,0,0.3)',
        paddingTop:'2rem',
        minHeight:'15rem',
        paddingRight:'1.5rem',
        borderTopRightRadius:"8px",
        borderBottomRightRadius:"8px",
    },

    button: {
        
        backgroundColor: '#0063cc',
        '&:hover': {
            backgroundColor: '#FFFFFF',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
    }

  }));

const Home = () => {

    const classes = useStyles();
    const [checked,setChecked] = useState(false);

    useEffect(() => {
        setChecked(true)
        
    }, [])

    return (
        <div className={classes.root} id="Home">
            <NavBar/>
            <ThemeProvider theme={theme}>
                <Grid className={classes.outerframe}>
                    <Grid className={classes.frame}>
                <Collapse 
                    in={checked}
                    {...(checked ? { timeout: 2000 } : {})}
                    collapsedHeight={10}
                    >
                                        
                    <Grid container xs={12}>
                        <Grid item xs={12} sm={12} lg={3}>
                            <Box className={classes.paperBg} pt={3}>
                                <Avatar alt="R.P." src={primas} className={classes.avatar}/>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={9}>
                            <Box className={classes.paperBg2}>
                                <Grid item xs={12}>
                                    <Box mb={2}>
                                    <Typography variant="h4" color="primary" align="right">Rafael Primas</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h3" color="primary" align="right">Full-Stack Web & App Developer</Typography>
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Box align="right" mt={3}>
                                    <Button 
                                        variant="outlined" 
                                        color="primary" 
                                        className={classes.button}>
                                        <Link
                                            href={pdf}
                                            //target="_blank"
                                            //to="../static/images/CV_Rafael.pdf"
                                        >
                                            
                                            CV
                                        </Link>
                                    </Button>
                                    </Box>
                                </Grid> */}
                            </Box>
                        </Grid>

                    
                    {/* <Collapse 
                    in={checked}
                    {...(checked ? { timeout: 1500 } : {})}
                    collapsedHeight={50}
                    > */}
            
                
           
            
            



                            </Grid>
                        </Collapse>

                        
                    </Grid>

                    <Grid container justifyContent="center">
                        <Scroll to="About" smooth={true}>
                            <Box>
                                <FontAwesomeIcon className={classes.goDown} icon="chevron-down"/>
                            </Box>
                        </Scroll>
                    </Grid>

                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default Home
