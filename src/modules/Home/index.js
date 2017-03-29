import React from 'react';

export default class Home
  extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return(
      <div className="jumbotron">
        <h1>Tweeter Based Application</h1>
      </div>
    );
  }
}
