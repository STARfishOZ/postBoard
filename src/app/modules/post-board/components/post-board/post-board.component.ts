import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {PostItemInterface} from '../../types/post-item.interface';
import {trackByIndex as trackByIndexHelper} from '../../helpers/post-board.helper';
import {LocalStorageService} from '../../services/local-storage.service';
import {DateTime} from 'luxon';

@Component({
  selector: 'app-post-board',
  templateUrl: './post-board.component.html',
  styleUrls: ['./post-board.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostBoardComponent implements OnChanges {

  @Input()
  title: string;

  @Input()
  postsData: PostItemInterface[];

  @Output()
  postAction = new EventEmitter<PostItemInterface>();

  @HostBinding('class.post-board') hostClass = true;

  trackBy = trackByIndexHelper;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.postsData) {
      this.initializePosts(this.postsData);
    }
  }
  /**
   * Emit data to be used outside of module
   */
  onPostAction(data: PostItemInterface): void {
    this.postAction.emit(data);
  }

  /**
   * Sort posts by date before using
   */
  private sortPostDataByDate(data: PostItemInterface[]): void {
    this.postsData = data
      .sort((a, b) => a.date.toMillis() - b.date.toMillis());
  }

  /**
   * Check if there is data in local storage to use and if not use the one coming outside
   */
  private initializePosts(data: PostItemInterface[]): void {
    let postsData = this.getDataFromLocalStorage();
    postsData = !postsData ? data : postsData;
    postsData.forEach(item => item.date = DateTime.fromISO(item.date));

    this.sortPostDataByDate(postsData);
  }

  /**
   * Use data from local storage
   */
  private getDataFromLocalStorage(): PostItemInterface[] {
    return this.localStorageService.getPostsDataFromStorage();
  }

}
