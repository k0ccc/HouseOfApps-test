import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Post, PostsService } from 'src/app/services/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialog } from './modal_delete/modal-dialog';
import { RoutePatchService } from '../patch/patch.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements AfterViewInit, OnInit {
  posts: Post[] = [];

  findPost: any = '';

  patch!: boolean;
  constructor(
    private route: Router,
    private auth: AuthService,
    private post: PostsService,
    private dialog: MatDialog,
    private patchS: RoutePatchService,
  ) {}
  ngOnInit() {
    this.findPost = sessionStorage.getItem('findPost');
    this.patch = this.patchS.getState();
  }
  ngAfterViewInit(): void {
    this.post.getAllPosts().subscribe((data) => (this.posts = data));
  }
  // Сохронение фильтра
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.findPost !== null) {
      sessionStorage.setItem('findPost', this.findPost);
    }
  }
  // Выход
  logout() {
    localStorage.setItem('auth', 'false');
    this.auth.logout();
    this.route.navigate(['/login']);
  }
  // Удаление поста
  deletePost(id: number) {
    console.log(this.patch);
    const dialogRef = this.dialog.open(ModalDialog, {
      width: '300px',
      data: { id: id, text: 'Удалить?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.post.deletePost(id).subscribe(() => {
          this.posts = this.posts.filter((t) => t.id !== id);
        });
      }
    });
  }
  patchPost(id: number) {
    this.patch = !this.patch;
    this.patchS.changeState();
    if (!this.patch) {
      this.route.navigateByUrl('/news/' + id);
    } else {
      this.route.navigateByUrl('/news');
    }
  }
}
