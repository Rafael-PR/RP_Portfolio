import React from 'react';
import { useForm } from '@formspree/react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import { Typography } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const useStyles = makeStyles((theme) => ({

        root: {
            margin: theme.spacing(1),
            width: "100%",
        },
        inputField: {
            width:"80%",
            marginBottom:10,
            background:'#E8E8DB',
            borderRadius:'6px'
        },
        button: {
            backgroundColor:"#494846",
            color:"#FFFFFF",
            '&:hover': {
                backgroundColor: '#FFDF65',
                borderColor: '#494846',
                color:'#494846',
                boxShadow: 'none',
            },
        },
        
        thanks: {
            background: 'rgba(0,0,0,0.3)',
            padding:'5px',
            textAlign:'center',
            height:'9rem',
            width:'15rem'
        },

      }));


const ContactForm = () => {
    
    const classes = useStyles();

    const [state, handleSubmit] = useForm("mjvjewlq");
        if (state.succeeded) {
        return <div>
            <Grid >
                <Paper className={classes.thanks}>
                    <Typography color="primary" variant="h6">
                        Vielen Dank für Deine Nachricht !
                    </Typography>
                </Paper>
            </Grid>
            
            </div>;
        }

    return (
        <div className={classes.contact}>
            <ThemeProvider theme={theme}>

                <form 
                className={classes.root} 
                noValidate autoComplete="off" 
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mjvjewlq" method="post"
                >
      
                    <Grid container xs={12}>

                            <Grid xs={12} > 
                                <TextField className={classes.inputField}
                                    name="name"
                                    label="Name" 
                                    type="text"
                                    id="name" 
                                    variant="filled" 
                                />
                            </Grid>

                            <Grid xs={12}>
                                <TextField 
                                    className={classes.inputField}
                                    name="email"
                                    label="Email" 
                                    type="email"
                                    id="email" 
                                    variant="filled" 
                                    required
                                />
                            </Grid>

                            <Grid xs={12}>
                                <TextField 
                                    className={classes.inputField}
                                    name="nachricht"
                                    label="Nachricht" 
                                    multiline="true"
                                    id="nachricht"
                                    variant="filled" 
                                    rows="8"
                                    rowsMax="12"
                                />
                                
                            </Grid>

                            <Grid xs={12}>
                                <Button 
                                    className={classes.button}
                                    variant="text"
                                    startIcon={<FontAwesomeIcon icon="paper-plane"/>}
                                    color="primary"
                                    type="submit" 
                                    disabled={state.submitting}
                                    >    
                                    Senden
                                </Button>
                            </Grid>

                    </Grid>
        </form>


        </ThemeProvider>
        </div>
    )
}

export default ContactForm
