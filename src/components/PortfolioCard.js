import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/theme';
import Link from '@material-ui/core/Link';
import {Typography, Paper} from '@material-ui/core';
import Box from '@material-ui/core/Box';





const useStyles = makeStyles((theme) => ({

    root: {
        maxWidth: 400,
        background: 'rgba(0,0,0,0.3)',
        margin:"10px",
        minheight: 600,
        paddingTop:"2px",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
      },

      media: {
        height: 240,
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
      },
      
      description:{
        fontFamily: 'Poppins',
        fontSize: '1.0rem',
        color:'#ddd',
        minHeight:'80px',
        background: 'rgba(0,0,0,0.3)',
        borderBottomLeftRadius:"8px",
        borderBottomRightRadius:"8px",
        padding:"5px",
      },

      stack:{
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color:'#ffffff',
        marginTop:'10px',
        background: 'rgba(0,0,0,0.3)',
        borderRadius:"8px",
        padding:"5px",
      },

      button:{
        backgroundColor: '#858377',
        justifyContent:"center",
        //color:'#000000',
        '&:hover': {
          backgroundColor: '#FFDF65',
          borderColor: '#494846',
          color:'#494846',
          boxShadow: 'none',
        },

      },
      paper:{
        background: 'rgba(0,0,0,0.3)',
        padding:'1px',
        margin:'0.3rem',
        borderRadius:"15px"
      },

      links:{
          display:"flex",
          justifyContent:"center"
      },

      boxBg: {
        background: 'rgba(0,0,0,0.3)',
        borderRadius:'8px',
        padding:'0.2rem'
      }

  }));


const PortfolioCard = ({project}) => {

  const classes = useStyles();
//   const preventDefault = (event) => event.preventDefault();

  return (
    <ThemeProvider theme={theme}>

      <div >
          <Paper className={classes.paper}>
              <Card className={classes.root}>
                  <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={project.imageUrl}
                          title="Contemplative Reptile"
                      />
                    <CardContent>
                          <Box className={classes.boxBg}>
                              <Typography variant="h5" color="primary">
                                  {project.title}
                              </Typography>
                              <Box pl={1} mt={1}>
                                <Typography variant="body1" color="primary" align="left" >
                                    {project.description}
                                </Typography>
                              </Box>
                          </Box>
                              <Typography className={classes.stack}>
                                  {project.stack}
                              </Typography>
                      </CardContent>
                  </CardActionArea>

                  <CardActions className={classes.links}>
                      <Button size="small"  className={classes.button}>
                          <Link href={project.linkCode} target="blank">
                              CODE
                          </Link>
                      </Button>
                      <Button size="small" color="secondary" className={classes.button}>
                          <Link href={project.linkSide} target="blank">
                              LIVE
                          </Link>
                      </Button>
                  </CardActions>
              </Card>
          </Paper>
      </div>
    </ThemeProvider>
  );
}

export default PortfolioCard;