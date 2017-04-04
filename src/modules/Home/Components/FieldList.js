import React, { PropTypes } from 'react';
import FieldRow from './FieldRow';

const FieldList = ({tweets}) =>{
  return (
    <div className="list-group">
      {tweets.map((tweet)=>
        <FieldRow key={tweet['id_str']} tweet={tweet}/>
      )}
    </div>
  );
};

FieldList.propTypes = {
  tweets: PropTypes.array.isRequired
};

export default FieldList;
