import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      "title": title
    });

    setTitle('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} className="form-control" onChange={e => setTitle(e.target.value)} />
        </div>
        <br/>
        <button className="btn btn-primary"> Save </button>
      </form>
    </div>
  )

}

export default PostCreate;