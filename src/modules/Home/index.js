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
        <div className="page-header">
          <h1>Tweeter Based API</h1>
        </div>
        <Feeds/>
      </div>
    );
  }
}
