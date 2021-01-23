import {PostItemInterface} from '../types/post-item.interface';

/**
 * trackBy function to avoid additional value check inside *ngFor
 */
export function trackByIndex(index: number, post: PostItemInterface): number {
  return post ? post.id : index;
}
