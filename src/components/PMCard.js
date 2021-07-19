import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({

    root: {
        maxWidth: 300,
        background: 'rgba(0,0,0,0.3)',
        margin:"20px",
        height: 420,
    },
    
    title:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '1.3rem',
        color:'#ffffff',
        textAlign:'center',
        marginBottom:'10px',
        minHeight:'60px'
    },

    descriptionTitle:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '1.0rem',
        color:'#ffffff',
        marginTop:'10px',
    },

    stack:{
        fontFamily: 'Poppins',
        fontSize: '0.9rem',
        color:'#ffffff',
        marginTop:'5px',
    },

    icon:{
        direction:'flex',
        color:'#ffffff',
        fontSize: '4.0rem',
    },

    iconCard:{
        textAlign:'center',
        marginTop:'10px',
        marginBottom:'15px'
    },

    paperbg:{
        background: 'rgba(0,0,0,0.3)',
        padding:'15px',
      }

  });

const PMCard = () => {

    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root}>
              <CardActionArea>
                
                  <CardContent>
                      <Box className={classes.iconCard}>
                          <FontAwesomeIcon className={classes.icon} icon="tasks"/>
                      </Box>
                      <Typography   className={classes.title}>
                      Project Management
                      </Typography>

                      <Paper className={classes.paperbg}>
                        <Typography   className={classes.descriptionTitle}>
                            Methoden
                        </Typography>
                        <Typography   className={classes.stack}>
                        ● Agile ● SCRUM
                        </Typography>
                        <Typography   className={classes.descriptionTitle}>
                            Tools
                        </Typography>
                        <Typography   className={classes.stack}>
                        ● Jira ● Trello 
                        </Typography>
                      </Paper>
                  </CardContent>

              </CardActionArea>
            </Card>
            
        </div>
    )
}

export default PMCard;