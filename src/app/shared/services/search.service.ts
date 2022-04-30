import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyBQSd-_bqtg5szRlEK2bOvEZMeV6mS2qeY';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable <any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=10`;
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }

  whishlisturl ="http://localhost:3000/whishlist";

  addFav(VideoId: any){
    return this.http.post(this.whishlisturl ,{id:VideoId})
    }

    removeFav(VideoId: any) 
    {
      return this.http.delete("http://localhost:3000/whishlist/"+VideoId);

    }

  


}
