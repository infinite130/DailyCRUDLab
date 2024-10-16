// App.js
import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <h1>My CRUD Blog</h1>
          <nav>
            <Link to="/">게시글 목록</Link> | <Link to="/create">글 작성하기</Link>
          </nav>

          <Routes>
            <Route path="/" element={<PostList/>}/>
            <Route path="/create" element={<PostForm/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
