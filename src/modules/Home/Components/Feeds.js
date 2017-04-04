import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import * as tweeterActions from '../../../actions/tweeterActions';
import SearchField from './SearchField';

class Feeds extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      searchText: this.props.searchText,
      tweets: this.props.tweets
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({tweets: Object.assign([], nextProps.tweets)});
  }

  mapFeed(tweet){
    return (
      <a className="list-group-item list-group-item-action flex-column align-items-start"
         key={tweet['id_str']} id={tweet['id_str']}>
        <div className="d-flex w-100 justify-ctent-between">
          <div>
            <a href={tweet['user']['url']} target="_blank">
              <img src={tweet['user']['profile_image_url']} alt=""/>
            </a>
          </div>
          <div>
            {tweet['user']['name']}
          </div>
          <div>on
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

  onChange(event){
    let searchText = event.target.value;
    return this.setState({searchText: searchText});
  }

  onSearch(){
    event.preventDefault();
    this.props.actions.getTweets(this.state.searchText);
  }

  render(){
    return (
      <div>
        <SearchField
          placeholder="Search here"
          value={this.state.searchText}
          onChange={this.onChange}
          onSearch={this.onSearch}/>
        <div className="list-group">
          {this.state.tweets.map((tweet)=> this.mapFeed(tweet))}
        </div>
      </div>
    );
  }
}

Feeds.propTypes = {
  searchText: PropTypes.string.isRequired,
  tweets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps){
  let searchText = '';
  console.log('tweets', state.tweets);
  return {
    searchText: searchText,
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tweeterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
