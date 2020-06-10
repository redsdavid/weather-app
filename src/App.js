import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtendend';
import './App.css';

const cities = [
  'Hawaii,us',
  'Bogota,col',
  'Lyon,fra',
  'Moscow,RU',
  'Cartagena,col'
]

class App extends Component {

  constructor(){
    super();
    this.state = { 
      city: null
    };
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
              <Toolbar>
                  <Typography variant='h5' color='inherit'>
                    David Weather App! :)
                  </Typography>
              </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col xs={12} md={6} className="extended-weather-cont">
            <Paper>
              <div className="details">
                { city &&
                <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
