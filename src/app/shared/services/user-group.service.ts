import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { USER_GROUPS } from "../constants/user-groups";
import { UserGroup } from "../models/user-group.interface";

@Injectable({
  providedIn: 'root',
})

export class UserGroupService {
  private _userGroups: UserGroup[] = USER_GROUPS;
  private _userGroups$: BehaviorSubject<UserGroup[]> = new BehaviorSubject<UserGroup[]>(this._userGroups);

  public get userGroups(): Observable<UserGroup[]> {
    return this._userGroups$.asObservable();
  }

  public addUserGroup(name: string): void {
    const newGroup: UserGroup = {
      id: Math.random(),
      title: name,
      permissions: [],
      users: []
    }

    this._userGroups = [...this._userGroups, newGroup];
    this._updateUserGroups();
  }

  public deleteUserGroup(id: number): void {
    this._userGroups = this._userGroups.filter(group => group.id !== id);
    this._updateUserGroups();
  }

  public deleteGroupPermission(id: number, permission: string): void {
    this._userGroups
      .filter(group => group.id === id)
      .map(group => group.permissions.splice(group.permissions.indexOf(permission), 1))

    this._updateUserGroups();
  }

  private _updateUserGroups(): void {
    this._userGroups$.next(this._userGroups);
  }
}
