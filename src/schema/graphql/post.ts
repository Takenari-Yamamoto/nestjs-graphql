import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user';

@ObjectType()
export class Post {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => User)
  user: User;
}
