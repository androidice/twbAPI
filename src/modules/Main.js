import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Main
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


function mapStateToProps(state, ownProps){
  debugger;
  return {
    token: state.token
  };
}

export default connect(mapStateToProps)(Main);
