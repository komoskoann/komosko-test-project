import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class UserComponent extends BaseComponent implements OnInit {

  public panelOpenState: boolean = false;
  public users: Observable<User[]> = this._userService.users;

  constructor(private _userService: UserService, private _dialog: MatDialog) {
    super();
   }

  ngOnInit(): void {
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
      .subscribe(data => this._userService.addUser(data.name));
  }

  public removePermission(id: number, permission: string): void {
    this._userService.deleteUserPermission(id, permission);
  }

  public getActualPermissions(id: number, permissions: string[]): string[] {
    // console.log(this._userService.getUserPermissions(id));
    PERMISSIONS.filter(permission => console.log(id, permission, this._userService.getUserPermissions(id), this._userService.getUserPermissions(id).includes(permission)));
    return PERMISSIONS.filter(permission => !this._userService.getUserPermissions(id).includes(permission));

  }

  public addPermission(id: number, permission: string): void {
    this._userService.addUserPermission(id, permission);
  }

}
