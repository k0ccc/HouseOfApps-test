import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../services/posts.service';

@Pipe({
  name: 'findPost',
})
export class FindPostPipe implements PipeTransform {
  transform(posts: Post[], search: string = ''): Post[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter((post) => {
      return JSON.stringify(post).includes(search);
    });
  }
}
