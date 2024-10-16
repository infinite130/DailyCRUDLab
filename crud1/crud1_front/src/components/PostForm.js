import React, {useState} from 'react';
import axios from 'axios';

const PostForm = ({onSubmitSuccess, existingPost}) => {
  // 상태 설정: 제목과 내용
  const [title, setTitle] = useState(existingPost ? existingPost.title : '');
  const [content, setContent] = useState(
      existingPost ? existingPost.content : '');

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    const postDate = {
      title: title,
      content: content,
    };

    // 기존 게시글이 있으면 PUT, 없으면 POST 요청
    if (existingPost) {
      axios.put(`http://localhost:8080/api/posts/${existingPost.id}`, postDate)
      .then(response => {
        console.log('Post updated successfully:', response.data);
        onSubmitSuccess(); // 성공 콜백 호출
      })
      .catch(error => {
        console.error('There was an error updating the post!', error);
      });
    } else {
      axios.post('http://localhost:8080/api/posts', postDate)
      .then(response => {
        console.log('Post created successfully:', response.data);
        onSubmitSuccess(); // 성공 콜백 호출
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
          />
        </div>
        <button type="submit">{existingPost ? 'Update Post'
            : 'Create Post'}</button>
      </form>
  );
};

export default PostForm;