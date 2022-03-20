import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList!: IPost[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.loadPosts(5).subscribe(postList => {
      this.postList = postList;
    })
  }
}
