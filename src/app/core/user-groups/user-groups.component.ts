import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base-component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { UserGroup } from 'src/app/shared/models/user-group.interface';
import { UserGroupService } from 'src/app/shared/services/user-group.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserGroupsComponent extends BaseComponent implements OnInit {

  public panelOpenState: boolean = false;
  public userGroups: Observable<UserGroup[]> = this._userGroupService.userGroups;

  constructor(private _userGroupService: UserGroupService, private _dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
  }

  public openDialog(): void {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Create new user group'
    };

    const dialogRef = this._dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe(data => console.log(data.name));
  }

}
