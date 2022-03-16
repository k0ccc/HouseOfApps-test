import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginGuard } from "src/app/services/auth.guard";
import { SharedModule } from "src/app/shared/shared.module";
import { NewsComponent } from "../news/news.component";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'news',
        component: NewsComponent,
        loadChildren: () =>
          import('../news/news.module').then((m) => m.NewsModule),
        canActivate: [LoginGuard],
      },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/login' },
    ]),
  ],
  exports: [RouterModule],
})
export class LoginModule {}