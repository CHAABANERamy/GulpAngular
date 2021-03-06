import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-list',
   templateUrl:  'app/album/album-list.component.html'
})
export class AlbumListComponent {

  albums;

  constructor(albumService: AlbumService) {
    this.albums = albumService.getAlbums();
  }


}
