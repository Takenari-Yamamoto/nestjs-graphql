import { Resolver, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from 'src/schema/graphql/post';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    throw new Error('Not implemented');
  }
}
