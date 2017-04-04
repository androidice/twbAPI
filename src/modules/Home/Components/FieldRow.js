import React, { PropTypes } from 'react';
import moment from 'moment';

const FieldRow = ({tweet}) =>{
  return (
    <div className="list-group-item clearfix">
      <div className="profile-teaser-left">
        <div className="profile-img">
          <a href={tweet['user']['url']} target="_blank">
            <img src={tweet['user']['profile_image_url']} alt=""/>
          </a>
        </div>
      </div>
      <div className="profile-teaser-main">
        <h2 className="profile-name">{tweet['user']['name']}
        </h2>
        <small>
          {moment(new Date(tweet['user']['created_at'])).format('DD MMM YYYY h:mm a')}
        </small>
        <div className="profile-info">
          <div className="info">
            {tweet['user']['description']}
          </div>
          <div className="info">
            {tweet['text']}
          </div>
          <div className="info">
            <span className="">FOLLOWERS: </span>{tweet['user']['followers_count']}
          </div>
          <div className="info">
            <span className="">FOLLOWING: </span>{tweet['user']['friends_count']}
          </div>
        </div>
      </div>
    </div>
  );
};

FieldRow.propTypes = {
  tweet: PropTypes.object.isRequired
};

export default FieldRow;
