import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from './post';
import { UserRoleField, UserRoleValue } from './common';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [Post])
  posts: Post[];

  @Field(() => UserRoleField)
  role: UserRoleValue;

  @Field(() => String)
  age: string;
}
