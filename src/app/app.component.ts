import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'My new hello-world';
  post = {
    title:"Title",
    isFavorite:true,
    isLoves:true
  }

  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log("Favorite Changed :" , eventArgs.newValue );
}
}
