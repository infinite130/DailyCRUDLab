// crud1_front/scr/services/api.js
import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/posts';

// 모든 게시글 가져오기
export const fetchPosts = async () => {
  try {
    const respons = await axios.get(API_BASE_URL);
    return respons.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// 새 게시글 생성
export const createPost = async (postData) => {
  try {
    const reponse = await axios.post(API_BASE_URL, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// 게시글 수정
export const updatePost = async (id, postData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, postData);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};