import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginGuard } from "src/app/services/auth.guard";
import { SharedModule } from "src/app/shared/shared.module";
import { NewsComponent } from "./news/news.component";
import { LoginComponent } from "./login/login.component";
import { MatButtonModule } from '@angular/material/button'; 
import { PatchComponent } from "./patch/patch.component";
import { HttpClientModule } from "@angular/common/http";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from '@angular/material/dialog'; 
import { FindPostPipe } from "../pipes/find-post.pipe";
import { ModalDialog } from "./news/modal_delete/modal-dialog";
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from "@angular/material/form-field";
@NgModule({
  declarations: [
    LoginComponent,
    ModalDialog,
    NewsComponent,
    PatchComponent,
    FindPostPipe,
  ],
  imports: [
    SharedModule,
    SharedModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {
        path: 'news',
        component: NewsComponent,
        canActivate: [LoginGuard],
        children: [{ path: ':id', component: PatchComponent }],
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/login' },
    ]),
  ],
  exports: [RouterModule],
})
export class ComponentsModule {}