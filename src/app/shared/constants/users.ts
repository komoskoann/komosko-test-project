import { User } from "../models/user.interface";
import { PERMISSIONS } from "./permissions";

export const USERS: User[] = [
  {
    id: 1,
    name: 'User 1',
    permissions: PERMISSIONS,
    groups: [1],
    groupPermissions: [],
  },
  {
    id: 2,
    name: 'User 2',
    permissions: [
      'Permission 1',
      'Permission 2',
    ],
    groups: [4],
    groupPermissions: [],
  },
  {
    id: 3,
    name: 'User 3',
    permissions: PERMISSIONS,
    groups: [1],
    groupPermissions: [],
  },
  {
    id: 4,
    name: 'User 4',
    permissions: [
      'Permission 3',
      'Permission 4',
      'Permission 5',
    ],
    groups: [3],
    groupPermissions: [],
  },
]
