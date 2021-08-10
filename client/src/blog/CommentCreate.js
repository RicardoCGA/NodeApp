  import React, {useState} from 'react';
  import axios from 'axios';

  const CommentCreate = ({postId}) => {

    const [content, setContent] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content});
      setContent('');
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>New comment</label>
            <input value={content} onChange={event => setContent(event.target.value)} className="form-control"/>
          </div>
          <br/>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }

  export default CommentCreate;