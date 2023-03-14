import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MainComponent } from './shared/containers/main/main.component';
import { UsersModule } from './core/users/users.module';
import { UserGroupsModule } from './core/user-groups/user-groups.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    UsersModule,
    UserGroupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
