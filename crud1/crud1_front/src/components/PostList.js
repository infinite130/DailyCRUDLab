// PostList.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/PostList.css'; //

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/posts')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.error("There was an error fetching the posts!", error);
    });
  }, []);

  return (
      <div className="post-list">
        <h1>게시판</h1>
        <table className="post-table">
          <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
          </tr>
          </thead>
          <tbody>
          {posts.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td className="title">{post.title}</td>
                <td>{post.content}</td>
                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default PostList;
