import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { USERS } from "../constants/users";
import { User } from "../models/user.interface";

@Injectable({
  providedIn: 'root',
})

export class UserService {
  public _users: User[] = USERS;
  private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this._users);

  public get users(): Observable<User[]> {
    return this._users$.asObservable();
  }

  public addUser(userName: string): void {
    const newUser: User = {
      id: Math.random(),
      name: userName,
      permissions: [],
      groups: [],
      groupPermissions: [],
    }

    this._users = [...this._users, newUser];
    this._updateUsers();
  }

  public deleteUser(id: number): void {
    this._users = this._users.filter(user => user.id !== id);
    this._updateUsers();
  }

  public deleteUserPermission(id: number, permission: string): void {
    this._users
      .filter(user => user.id === id)
      .map(user => user.permissions.splice(user.permissions.indexOf(permission), 1))

    this._updateUsers();
  }

  public addUserPermission(id: number, permission: string): void {
    this._users
      .filter(user => user.id === id)
      .map(user => user.permissions = [...user.permissions, permission]);

    this._updateUsers();
  }

  private _updateUsers(): void {
    this._users$.next(this._users);
  }
}
