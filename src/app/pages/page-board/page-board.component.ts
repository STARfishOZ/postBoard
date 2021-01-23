import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PostItemInterface} from '../../modules/post-board/types/post-item.interface';
import {Observable, of} from 'rxjs';
import {getRandomInt, populatePostsData} from '../../helpers/demo.helper';
import {PostActionTypeEnum} from '../../modules/post-board/types/post-action-type.enum';
import {LocalStorageService} from '../../modules/post-board/services/local-storage.service';

@Component({
  selector: 'app-page-board',
  templateUrl: './page-board.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageBoardComponent implements OnInit {
  title = 'Welcome to post board';

  postsData: PostItemInterface[];
  postsData$: Observable<PostItemInterface[]>;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.postsData = populatePostsData(10);
    this.updateData();
  }

  /**
   * Manipulate with existing data depending on post CREATE, EDIT, DELETE action
   */
  onPostAction(post: PostItemInterface & { action: PostActionTypeEnum }): void {
    const {
      action,
      ...keys
    } = post;

    if (this.postsData === undefined) {
      this.postsData = [];
    }

    if (action === PostActionTypeEnum.Delete) {
      const indexForRemove = this.postsData.map(({id}) => id).indexOf(post.id);
      this.postsData.splice(indexForRemove, 1);
    }

    if (action === PostActionTypeEnum.Edit) {
      const indexForChange = this.postsData.findIndex(({id}) => id === post.id);
      this.postsData[indexForChange] = {...keys};
    }

    if (action === PostActionTypeEnum.Create) {
      this.postsData.push({...keys, id: getRandomInt(1, 999999)});
    }

    // I dont like it to be here, should be located inside of post-board.module to finish the concept of fully re-usable component
    // But I think this example is enough to understand if this fit
    this.localStorageService.setPostsDataToStorage(this.postsData);
    this.updateData();
  }

  private updateData(): void {
    this.postsData$ = of([...this.postsData]);
  }

}
