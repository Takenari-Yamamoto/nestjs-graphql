import { registerEnumType } from '@nestjs/graphql';

export function registerEnumTypeFromObject(obj: object, name: string) {
  const enumType = {};
  Object.values(obj).forEach((value) => {
    if (typeof value === 'string') {
      enumType[value] = value;
    }
  });
  registerEnumType(enumType, { name });
}
