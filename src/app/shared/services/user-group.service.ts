import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { USER_GROUPS } from "../constants/user-groups";
import { UserGroup } from "../models/user-group.interface";

@Injectable({
  providedIn: 'root',
})

export class UserGroupService {
  private _userGroups: UserGroup[] = USER_GROUPS;
  private _usersGroups$: BehaviorSubject<UserGroup[]> = new BehaviorSubject<UserGroup[]>(this._userGroups);

  public get userGroups(): Observable<UserGroup[]> {
    return this._usersGroups$.asObservable();
  }

}
