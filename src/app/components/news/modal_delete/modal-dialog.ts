import { Component, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData{
    id:number;
    text:string;

}

@Component({
  selector: 'modal-dialog',
  templateUrl: 'modal-dialog.html',
})
export class ModalDialog {
  constructor(
      public dialogRef: MatDialogRef<ModalDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
