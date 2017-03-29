import React, { PropTypes } from 'react';

export default class Main
extends React.Component {

  render(){
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};
