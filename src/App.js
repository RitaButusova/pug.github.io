import React from 'react';
import {Button, Grid, } from '@material-ui/core';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Card,CardMedia, CardContent, CardActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeautersPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeautersPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }

}))



function App() {
  const classes = useStyles();
  const cards = [1,2,3,4,5,6,7,8,9];
  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton className={classes.menuButton} adge="start" color="inherit" area-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">Pug</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined"> Log in</Button>
          </Box>
          <Button color="secondary" variant="contained"> Sign Up </Button>
        </Toolbar>
      </Container>
    </AppBar>


    <main>
      <Paper className={classes.mainFeautersPost}
        style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeautersPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color='inherit'
                    gutterBottom
                  >
                    Pug
                  </Typography>
                  <Typography
                    component="h5"
                    color='inherit'
                    paragraph
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                  <Button variant="contained" color = "secondary">
                    Learn more
                  </Button>
                </div>

              </Grid>
            </Grid>

          </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Web developer blog
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Start now</Button>
              </Grid>
              <Grid>
                <Button variant="outlined" color="primary">Learn more</Button>
              </Grid>

            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => { return <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia} 
                  image="https://source.unsplash.com/random"
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography 
                    variant="h5"
                    gutterBottom
                  >
                    Blog post
                  </Typography>
                  <Typography>
                    Blog post Blog post Blog post Blog post Blog post
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>

                  <LayerIcon />
                  <PlayCircleFilled />
                </CardActions>
              </Card>
            </Grid>
          })}
        </Grid>
      </Container>
    </main>
  </>
  );
}

export default App;
