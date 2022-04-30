import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../../shared/models/search.interface';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() videos: Video[];

  addedToWishList:boolean = false;
  videos5:Video[]
  
  constructor(private youtube:SearchService) { }

  ngOnInit()
   {
     this.addedToWishList;

     this.handleRemoveWishList;

   }

    handleAddToWishList()
    {
      this.youtube.addFav(this.videos).subscribe(()=>{
        this.addedToWishList=true;
      
      })
      }
      handleRemoveWishList()
      {
        this.youtube.removeFav(this.videos).subscribe(()=>
        {
          this.addedToWishList =  false;
        })
  }


}








