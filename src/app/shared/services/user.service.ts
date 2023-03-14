import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { USERS } from "../constants/users";
import { User } from "../models/user.interface";

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private _users: User[] = USERS;
  private _users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this._users);

  public get users(): Observable<User[]> {
    return this._users$.asObservable();
  }

  public addUser(userName: string) {
    const newUser: User = {
      id: Math.random(),
      name: userName,
      permissions: [],
      groups: [],
      groupPermissions: [],
    }

    this._users = [...this._users, newUser];
    this._updateUsers(this._users);
  }

  public deleteUser(id: number): void {
    this._users = this._users.filter(user => user.id !== id);
    this._updateUsers(this._users);
  }

  private _updateUsers(users: User[]): void {
    this._users = users;
    this._users$.next(users);
  }
}
