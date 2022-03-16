import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    OverlayModule,
    RouterModule,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
