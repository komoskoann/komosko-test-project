import { User } from "./user.interface";

export interface UserGroup {
  id: number,
  title: string,
  permissions: string[],
  users: User[]
}
