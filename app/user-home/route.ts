import Route from '@ember/routing/route';

export default class UserHome extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  async model({ user_id }: { user_id: string }) {
    const queryOptions = { filter: { userId: user_id } };
    const posts = await this.store.query('post', queryOptions);

    return posts;
  }
}
