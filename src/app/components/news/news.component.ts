import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Post, PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements AfterViewInit,OnInit {
  posts: Post[] = [];

  findPost:any = '';

  constructor(
    private route: Router,
    private auth: AuthService,
    private post: PostsService
  ) {}
  ngOnInit(){
    this.findPost = sessionStorage.getItem('findPost');
  }
  ngAfterViewInit(): void {
    this.post.getAllPosts().subscribe((data) => (this.posts = data));
  }
  // Сохронение фильтра
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.findPost !== null){
      sessionStorage.setItem('findPost', this.findPost);
    }
  }
  // Выход
  logout() {
    localStorage.setItem('auth', 'false');
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
