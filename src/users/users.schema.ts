import { Field, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.schema';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [Post])
  posts: Post[];
}
