import { registerEnumType } from '@nestjs/graphql';

export const UserRoleField = {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER',
} as const;

export type UserRoleValue = (typeof UserRoleField)[keyof typeof UserRoleField];

registerEnumType(UserRoleField, {
  name: 'UserRole',
});
