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
  return {
    access_token: state.accessToken
  };
}

export default connect(mapStateToProps)(Main);
