import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsComponent } from './news.component';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FindPostPipe } from 'src/app/pipes/find-post.pipe';

@NgModule({
  declarations: [NewsComponent, FindPostPipe],
  imports: [SharedModule, RouterModule,HttpClientModule, MatMenuModule, MatIconModule],
  exports: [RouterModule],
  providers: [],
})
export class NewsModule {}
