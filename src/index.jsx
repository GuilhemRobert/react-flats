import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlatsList from '../src/components/flats-list.jsx'
import flats from '../data/flats.js';
import SimpleMap from './components/map.jsx'

import '../assets/stylesheets/application.scss';

// const Hello = props => <div>Hello, {props.name}</div>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatCoordinates : {lat : 48.884211,lng : 2.34689},
      flats
    }
  }

  changeSelectedFlat = (coordinates) => {
    this.setState({selectedFlatCoordinates : coordinates})
  }

  render () {

    return (
      <div>
        <div className="flat-list">
          <FlatsList flats={this.state.flats} changeSelectedFlat={this.changeSelectedFlat}/>
        </div>
        <div className="map-container">
          <SimpleMap selectedFlatCoordinates={this.state.selectedFlatCoordinates}/>
        </div>
      </div>
      )
  }

}


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App/>, root);
}
