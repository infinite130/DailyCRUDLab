package com.narae.crud1.service;


import com.narae.crud1.entity.Post;
import com.narae.crud1.repository.PostRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

  private final PostRepository postRepository;


  @Autowired
  public PostService(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  public List<Post> findAll() {
    return postRepository.findAll();
  }

  public Optional<Post> findById(Long id) {
    return postRepository.findById(id);
  }

  public Post save(Post post) {
    return postRepository.save(post);
  }

  public void deleteById(Long id) {
    postRepository.deleteById(id);
  }

}
