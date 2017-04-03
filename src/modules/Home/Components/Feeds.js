import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class Feeds extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  mapFeed(tweet){
    return (<ul>
      <li key={tweet['id']} id={tweet['id']}>
        <span className="user" id={tweet['user']['id']}>
          <div>
          profile: <img src={tweet['user']['profile_image_url']} alt=""/> <br/>
          name: {tweet['user']['name']} <br/>
          Date Created: {tweet['user']['created_at']}
          </div>
        </span>
      </li>
    </ul>);
  }

  render(){
    return (
      <ul>
        {this.props.tweets.map((tweet)=> this.mapFeed(tweet))}
      </ul>
    );
  };
}


function mapStateToProps(state, ownProps){
  return {
   tweets: state.tweets
  };
}

export default connect(mapStateToProps)(Feeds)
