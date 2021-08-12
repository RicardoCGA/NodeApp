import React from 'react';

const CommentList = ({comments}) => {

  const renderComments = comments.map(comment => {
    let content = '';
    if (comment.status === 'approved'){
      content = comment.content;
    }
    if (comment.status === 'pending'){
      content = 'This comment is awaiting moderation';
    }
    
    if ( comment.status !== 'rejected'){
      return <li key={comment.id}>{content}</li>
    }else{
      return content;
    }
    
  });

  return <ul> {renderComments} </ul>;
}

export default CommentList;