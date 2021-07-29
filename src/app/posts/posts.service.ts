import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './post.model';

// Create only one instance in an entire app
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // Spread operator to create a new array to keep people from accessing private posts array directly
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
