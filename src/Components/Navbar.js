import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import blueGrey from '@material-ui/core/colors/blueGrey'

const styles = {
    root: {
      flexGrow: 1,
    },
    colorDefault:{
      backgroundColor: blueGrey[900],
    },
  
    text:{
      marginLeft: "25%",
      color: blueGrey[300],
      fontWeight: 700,
    },
  
    flex: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
  function NavBar(props) {
    return (
      <div className={styles.root}>
        <AppBar position="static" style={styles.colorDefault}>
          <Toolbar variant="dense">
            <div style={styles.text}> TDC | DestinyEngine > {props.title} </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default NavBar;