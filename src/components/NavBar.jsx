import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
},
  menuButton: {
  marginRight: theme.spacing(2),
},
  title: {
  flexGrow: 1,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
},
  search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
},
  searchIcon: {
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
  inputRoot: {
  color: 'inherit',
},
  inputInput: {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
  },
},
link: {
  textDecoration: 'none',
  color: 'white'
}
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Box mr="50px">
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/FII" className={classes.link} >
                FII
              </Link>
            </Typography>
          </Box>

          <Box mr="50px">
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/PRO" className={classes.link}>
                PRO
              </Link>
            </Typography>
          </Box>


          <Box mr="50px" flexGrow={1}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/CLIENT" className={classes.link}>
                CLIENT
              </Link>
            </Typography>
          </Box>



          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}