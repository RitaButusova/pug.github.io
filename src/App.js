import React from 'react';
import {Button} from '@material-ui/core';
import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
  }
}))

function App() {
  const classes = useStyles();

  return (
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
  );
}

export default App;
