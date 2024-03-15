import { Args, Query, Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Post, User } from './users.schema';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    console.log(id);
    throw new Error('Not implemented');
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    throw new Error('Not implemented');
  }

  @ResolveField(() => [Post])
  async posts(@Parent() user: User): Promise<Post[]> {
    console.log(user);
    throw new Error('Not implemented');
  }
}
