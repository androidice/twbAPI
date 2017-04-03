import React from 'react';
import Feeds from './Components/Feeds';

export default class Home
  extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return(
      <div>
        <div className="jumbotron">
          <h1>Tweeter Based Application</h1>
        </div>
        <div>
          <Feeds/>
        </div>
      </div>
    );
  }
}
