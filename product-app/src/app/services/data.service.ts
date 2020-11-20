import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Post } from '../models/post.model';
import { Observable} from 'rxjs';
import { Position } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _URL : string = "https://jsonplaceholder.typicode.com/posts";

  public postData: Post[];
  public searchOption = [];


  constructor(private _http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this._http.get<Post[]>(this._URL);
  }
  //
  filteredListOptions() {
    let posts = this.postData;
        let filteredPostsList = [];
        for (let post of posts) {
            for (let options of this.searchOption) {
                if (options.title === post.title) {
                  filteredPostsList.push(post);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}
