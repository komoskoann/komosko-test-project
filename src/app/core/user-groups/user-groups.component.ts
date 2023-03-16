import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base-component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { GROUP_PERMISSIONS } from 'src/app/shared/constants/permissions';
import { UserGroup } from 'src/app/shared/models/user-group.interface';
import { User } from 'src/app/shared/models/user.interface';
import { UserGroupService } from 'src/app/shared/services/user-group.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGroupsComponent extends BaseComponent implements OnInit {

  public panelOpenState: boolean = false;
  public userGroups: Observable<UserGroup[]> = this._userGroupService.userGroups;
  private _availablePermissions: string[] = [...GROUP_PERMISSIONS];
  private _availableUsers: User[] = [];

  constructor(private _userGroupService: UserGroupService, private _dialog: MatDialog, private _userService: UserService) {
    super();
  }

  public ngOnInit(): void {
     this._userService.users
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((users: User[]) => {
        this._availableUsers = [...users];
      });
  }

  public deleteGroup(id: number): void {
    this._userGroupService.deleteUserGroup(id);
  }

  public openDialog(): void {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Create new user group'
    }

    const dialogRef = this._dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(data => data ? this._userGroupService.addUserGroup(data.name) : '');
  }

  public removePermission(group: UserGroup, permissionIndex: number): void {
    group.permissions.splice(permissionIndex, 1);
  }

  public removeUser(group: UserGroup, userIndex: number): void {
    group.users.splice(userIndex, 1);
  }

  public getActualPermissions(permissions: string[]): string[] {
    return this._availablePermissions.filter(permission => !permissions.includes(permission));
  }

  public getActualUsers(users: User[]): User[] {
    return this._availableUsers.filter(user => !users.includes(user));
  }

  public addPermission(group: UserGroup, permission: string): void {
    group.permissions.push(permission);
  }

  public addUser(group: UserGroup, user: User): void {
    group.users.push(user);
  }

}
