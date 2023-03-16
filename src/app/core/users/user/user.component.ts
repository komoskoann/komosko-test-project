import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base-component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { PERMISSIONS } from 'src/app/shared/constants/permissions';
import { User } from 'src/app/shared/models/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent extends BaseComponent {

  public panelOpenState: boolean = false;
  public users: Observable<User[]> = this._userService.users;
  public availablePermissions: string[] = [...PERMISSIONS];

  constructor(
    private _userService: UserService,
    private _dialog: MatDialog
  ) {
    super();
  }

  public deleteUser(id: number): void {
    this._userService.deleteUser(id);
  }

  public openDialog(): void {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Create new user'
    };

    const dialogRef = this._dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(data => data ? this._userService.addUser(data.name!) : '');
  }

  public removePermission(user: User, permissionIndex: number): void {
    user.permissions.splice(permissionIndex, 1);
  }

  public getActualPermissions(permissions: string[]): string[] {
    return this.availablePermissions.filter(permission => !permissions.includes(permission));
  }

  public addPermission(user: User, permission: string): void {
    user.permissions.push(permission);
  }

  public trackById(_index: number, el: User) {
    return el.id
  }
}
