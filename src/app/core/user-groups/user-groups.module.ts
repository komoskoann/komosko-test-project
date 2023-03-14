import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material.module";
import { UserGroupsContainerComponent } from "./user-groups-container/user-groups-container.component";

@NgModule({
  declarations: [
    UserGroupsContainerComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [

  ],
})
export class UserGroupsModule {}
