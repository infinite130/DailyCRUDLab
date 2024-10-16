package com.narae.crud1.controller;

import com.narae.crud1.entity.Post;
import com.narae.crud1.service.PostService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

  private final PostService postService;

  @Autowired
  public PostController(PostService postService) {
    this.postService = postService;
  }

  @GetMapping
  public List<Post> getAllPosts() {
    return postService.findAll();
  }

  @GetMapping("/{id}")
  public Post getPostById(@PathVariable Long id) {
    return postService.findById(id).orElseThrow(() -> new RuntimeException("Post not found"));
  }

  @PostMapping
  public Post createPost(@RequestBody Post post) {
    return postService.save(post);
  }

  @PutMapping("/{id}")
  public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
    Post existingPost = postService.findById(id)
        .orElseThrow(() -> new RuntimeException("Post not found"));
    existingPost.setTitle(post.getTitle());
    existingPost.setContent(post.getContent());
    return postService.save(existingPost);
  }

  @DeleteMapping("/{id}")
  public void deletePost(@PathVariable Long id) {
    postService.deleteById(id);
  }

}
