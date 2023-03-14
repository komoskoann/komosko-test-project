import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material.module";
import { UserComponent } from "./user/user.component";
import { UsersContainerComponent } from './users-container/users-container.component';

@NgModule({
  declarations: [
    UserComponent,
    UsersContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UsersContainerComponent
  ],
})
export class UsersModule {}
