import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {PostItemInterface} from '../../types/post-item.interface';
import {PostActionTypeEnum} from '../../types/post-action-type.enum';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PostManipulationsComponent} from '../post-manipulations/post-manipulations.component';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-post-board-item',
  templateUrl: './post-board-item.component.html',
  styleUrls: ['./post-board-item.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostBoardItemComponent {

  @Input()
  post: PostItemInterface;

  @Output()
  postAction = new EventEmitter<PostItemInterface>();

  @HostBinding('class.post-item') hostClass = true;

  @HostBinding('class.post-item-create')
  get isPostItemCreate(): boolean {
    return this.post === undefined;
  }

  postActionType = PostActionTypeEnum;
  postActionNames = {
    create: 'Post a new note',
    edit: 'Edit note'
  };

  constructor(private materialDialog: MatDialog) { }

  /**
   * Open modal and provide data via config
   */
  openPopover(title: string, action: string,
              postData: Partial<PostItemInterface> = {name: {firstName: '', lastName: ''}, text: '', id: -1}): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title,
      action,
      postData
    };
    dialogConfig.minWidth = 400;

    this.materialDialog
      .open(PostManipulationsComponent, dialogConfig)
      .afterClosed()
      .pipe(
        take(1)
      )
      .subscribe(changedPostData => {
        if (changedPostData) {
          this.postAction.emit(changedPostData);
        }
    });
  }

}
