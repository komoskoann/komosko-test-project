import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/material.module";
import { DialogComponent } from "./dialog.component";


@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    DialogComponent
  ],
})
export class DialogModule {}
