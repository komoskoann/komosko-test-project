import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public form!: FormGroup;
  public description: string = this.data.title;

  constructor(private _fb: FormBuilder, private _dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  public ngOnInit(): void {
    this.form = this._fb.group({
      name: ['']
    })
  }

  public save(): void {
    this._dialogRef.close(this.form.value);

  }

  public closeDialog(): void {
    this._dialogRef.close();
  }


}
