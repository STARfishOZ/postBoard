import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostBoardComponent} from './components/post-board/post-board.component';
import {PostBoardItemComponent} from './components/post-board-item/post-board-item.component';
import { PostManipulationsComponent } from './components/post-manipulations/post-manipulations.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocalStorageService} from './services/local-storage.service';



@NgModule({
  declarations: [
    PostBoardComponent,
    PostBoardItemComponent,
    PostManipulationsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [PostBoardComponent],
  providers: [LocalStorageService]
})
export class PostBoardModule { }
