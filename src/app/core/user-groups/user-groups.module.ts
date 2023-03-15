import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material.module";
import { UserGroupsComponent } from './user-groups.component';

@NgModule({
  declarations: [
    UserGroupsComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    UserGroupsComponent
  ],
})
export class UserGroupsModule {}
