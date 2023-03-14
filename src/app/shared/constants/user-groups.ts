import {UserGroup} from "../models/user-group.model";
import {GROUP_PERMISSIONS} from "./permissions";

export const USER_GROUPS: UserGroup[] = [
  {
    id: 1,
    title: 'User Group 1',
    permissions: [],
    users: [1, 3]
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
    users: [4]
  },
  {
    id: 4,
    title: 'User Group 4',
    permissions: [],
    users: [2]
  },
]
