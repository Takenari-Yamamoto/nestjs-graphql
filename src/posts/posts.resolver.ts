import { Resolver, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.schema';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    throw new Error('Not implemented');
  }
}
