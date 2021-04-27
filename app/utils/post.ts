import { BufferedChangeset } from 'validated-changeset';

export function addTimestampToPost(post: BufferedChangeset) {
  post.set('createdAtTimestamp', new Date().getTime());
}
