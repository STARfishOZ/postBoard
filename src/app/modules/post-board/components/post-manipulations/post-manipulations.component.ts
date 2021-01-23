import {ChangeDetectionStrategy, Component, HostBinding, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostItemInterface} from '../../types/post-item.interface';
import {PostActionTypeEnum} from '../../types/post-action-type.enum';
import {DateTime} from 'luxon';

@Component({
  selector: 'app-post-manipulations',
  templateUrl: './post-manipulations.component.html',
  styleUrls: ['./post-manipulations.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostManipulationsComponent {

  @HostBinding('class.post-modal') hostClass = true;

  postId: number;
  form: FormGroup;
  postManipulationData: {title: string, action: string};

  postActionType = PostActionTypeEnum;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<PostManipulationsComponent>,
              @Inject(MAT_DIALOG_DATA) {title, action, postData}) {
    const typedPostData = (postData as PostItemInterface);

    this.postManipulationData = {title, action};
    this.postId = typedPostData.id;

    this.form = this.formBuilder.group({
      firstName: [typedPostData.name?.firstName, Validators.required],
      lastName: [typedPostData.name?.lastName, Validators.required],
      date: [{value: typedPostData ? typedPostData.date : '', disabled: true}, Validators.required],
      text: [typedPostData.text, Validators.required],
    });
  }

  onModalClose(action: PostActionTypeEnum): void {
    const {value, valid} = this.form;

    const result = {
      ...value,
      name: { firstName: value.firstName, lastName: value.lastName},
      id: this.postId,
      date: action === PostActionTypeEnum.Create ? DateTime.local() : value.date,
      action
    };

    if (valid) {
      this.dialogRef.close(result);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
