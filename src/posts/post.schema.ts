import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/users.schema';

@ObjectType()
export class Post {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  // user
  @Field(() => User)
  user: User;
}
