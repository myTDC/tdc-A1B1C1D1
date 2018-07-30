import React from 'react';
import {Link} from 'react-router-dom';
import './Participate.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {main: '#00E676',
      light: '#69F0AE'},
    },
  });

const Participate = (props) =>{

    function focusPersonal() {
        document.getElementById('personal').style.zIndex = 1;
        document.getElementById('startup').style.zIndex = 0;
        document.getElementById('personal').style.boxShadow = "0.2px 0.2px 7px #757575";
        document.getElementById('startup').style.boxShadow = "0.1px 0.1px 7px #fefefe";
      }
      
      function focusStartup() {
        document.getElementById('personal').style.zIndex = 0;
        document.getElementById('startup').style.zIndex = 1;
        document.getElementById('startup').style.boxShadow = "0.2px 0.2px 7px #757575";
        document.getElementById('personal').style.boxShadow = "0.1px 0.1px 7px #fefefe";
      }

    return(
        <div className="part">
            <Link to = "/participate/personal"> 
                <div id="personal" className="box" onClick={focusPersonal}>
                    <h3 className="text">Personal</h3>
                    <div className="progress"> 
                        <MuiThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" value={10}/>
                        </MuiThemeProvider> 
                    </div>
                </div>
            </Link>

            <Link to = "/participate/startup"> 
                <div id="startup" className="box" onClick={focusStartup}>
                    <h3 className="text">Startup</h3>
                    <div className="progress"> 
                        <MuiThemeProvider theme={theme}>
                        <LinearProgress variant="determinate" value={30}/>
                        </MuiThemeProvider> 
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Participate;