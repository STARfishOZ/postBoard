import {PostItemInterface} from '../types/post-item.interface';
import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {
  private storageName = 'post-board';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public getPostsDataFromStorage(): PostItemInterface[] {
    return  this.storage.get(this.storageName);
  }

  public setPostsDataToStorage(data: PostItemInterface[]): void {
    this.storage.set(this.storageName, data);
  }
}
