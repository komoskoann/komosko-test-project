import { UserGroup } from "../models/user-group.interface";
import { GROUP_PERMISSIONS } from "./permissions";
import { USERS } from "./users";

export const USER_GROUPS: UserGroup[] = [
  {
    id: 1,
    title: 'User Group 1',
    permissions: [],
    users: USERS
  },
  {
    id: 2,
    title: 'User Group 2',
    permissions: GROUP_PERMISSIONS,
    users: []
  },
  {
    id: 3,
    title: 'User Group 3',
    permissions: [],
    users: USERS
  },
  {
    id: 4,
    title: 'User Group 4',
    permissions: [],
    users: []
  },
]
