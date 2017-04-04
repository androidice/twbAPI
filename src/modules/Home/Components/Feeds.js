import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class Feeds extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  mapFeed(tweet){
    return (
      <a className="list-group-item list-group-item-action flex-column align-items-start"
         key={tweet['id_str']} id={tweet['id_str']}>
        <div className="d-flex w-100 justify-content-between">
          <div>
            <a href={tweet['user']['url']} target="_blank">
              <img src={tweet['user']['profile_image_url']} alt=""/>
            </a>
          </div>
          <div>
            {tweet['user']['name']}
          </div>
          <div>
            {tweet['user']['description']}
          </div>
          <div>
            {tweet['text']}
          </div>
          <div>
            {moment(new Date(tweet['user']['created_at'])).format('DD MMM YYYY h:mm a')}
          </div>
          <div>
           FOLLOWERS  {tweet['user']['followers_count']}
          </div>
          <div>
            FOLLING {tweet['user']['friends_count']}
          </div>
        </div>
      </a>);
  }

  render(){
    return (
      <div className="list-group">
        {this.props.tweets.map((tweet)=> this.mapFeed(tweet))}
      </div>
    );
  }
}

Feeds.propTypes = {
  tweets: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps){
  return {
   tweets: state.tweets
  };
}

export default connect(mapStateToProps)(Feeds);
