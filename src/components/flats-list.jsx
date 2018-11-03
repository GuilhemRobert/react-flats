import React, { Component } from 'react';
import Flat from './flat'


class FlatsList extends Component {

  render () {
    return (
        this.props.flats.map((obj) => {
          return <Flat flat={obj} key={obj.name} changeSelectedFlat={this.props.changeSelectedFlat}/>
        })
        )}

}

export default FlatsList;
