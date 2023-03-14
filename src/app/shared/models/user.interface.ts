export interface User {
  id: number,
  name: string,
  permissions: string[],
  groups: number[],
  groupPermissions: string[],
}
