import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { chdir } from 'process';
import { Observable } from 'rxjs';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { USERS } from 'src/app/shared/constants/users';
import { User } from 'src/app/shared/models/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  public panelOpenState: boolean = false;
  public users: Observable<User[]> = this._userService.users;

  constructor(private _userService: UserService, private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public deleteUser(id: number): void {
    this._userService.deleteUser(id);
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Create new user'
    };

    this._dialog.open(DialogComponent, dialogConfig);
  }

}
