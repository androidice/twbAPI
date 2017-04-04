import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../actions/tweeterActions';

class Main
extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  componentWillReceiveProps(nextProps){
   if(nextProps.access_token && nextProps.access_token != ''){
     this.props.dispatch(getTweets());
   }
  }

  render(){
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired,
  access_token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state, ownProps){
  return {
    access_token: state.accessToken
  };
}


export default connect(mapStateToProps)(Main);
