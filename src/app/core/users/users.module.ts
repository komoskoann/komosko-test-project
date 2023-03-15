import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DialogModule } from "src/app/shared/components/dialog/dialog.module";
import { MaterialModule } from "src/app/shared/material.module";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DialogModule
  ],
  exports: [
    UserComponent
  ],
})
export class UsersModule {}
