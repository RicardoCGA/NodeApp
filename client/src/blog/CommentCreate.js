  import React from 'react';

  const CommentCreate = ({postId}) => {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>New comment</label>
            <input className="form-control"/>
          </div>
        </form>
      </div>
    );
  }

  export default CommentCreate;