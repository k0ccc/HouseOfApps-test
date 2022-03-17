import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Post, PostsService } from 'src/app/services/posts.service';
import { RoutePatchService } from './patch.service';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.scss'],
})
export class PatchComponent implements OnInit {
  post!: Post;
  constructor(
    private activeRoute: ActivatedRoute,
    private postService: PostsService,
    private route: Router,
    private patchService: RoutePatchService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.postService.getPostById(params['id']).subscribe((post) => {
        this.post = post;
      });
    });
  }
  patch(id:number){
    this.postService.patchPost(id, this.post.title, this.post.body);
    this.patchService.changeState();
    this.route.navigateByUrl('/news');
  }
  close() {
    this.patchService.changeState();
    this.route.navigateByUrl('/news');
  }
}
