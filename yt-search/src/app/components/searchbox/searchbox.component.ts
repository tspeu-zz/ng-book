import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from 'src/app/models/searchresult';
import { YoutubesearchService } from 'src/app/service/youtubesearch.service';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';


@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YoutubesearchService,
              private el: ElementRef) { }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    const obs = fromEvent(this.el.nativeElement, 'keyup')
    .pipe (
        map((e:any) => e.target.value), // extract the value of the input

        // filter((text:string) => text.length > 1), //filter out if empty

        debounceTime(250), //only search after 250 ms

        tap(() => this.loading.emit(true)), // Enable loading
        // search, call the search service

        map((query:string) => this.youtube.search(query)) ,
        // discard old events if new input comes in

        switchAll()
        // act on the return of the search
        // subscribe(
        //   // //     (results: SearchResult[]) => { // on sucesss
        //   this.loading.emit(false);
        //   this.results.emit(results);
        // },
        // (err: any) => { // on error
        //   console.log(err);
        //   this.loading.emit(false);
        // },
        // () => { // on completion
        //   this.loading.emit(false);
        // }
        // )
      );
    // ----------------------------------
    //   Observable.fromEvent(this.el.nativeElement, 'keyup')
    //   .map((e: any) => e.target.value) // extract the value of the input
    //   .filter((text: string) => text.length > 1) // filter out if empty
    //   .debounceTime(250)                         // only once every 250ms
    //   .do(() => this.loading.emit(true))         // enable loading
    //   // search, discarding old events if new input comes in
    //   .map((query: string) => this.youtube.search(query))
    //   .switch()
    //   // act on the return of the search
    //   .subscribe(
    //     (results: SearchResult[]) => { // on sucesss
    //       this.loading.emit(false);
    //       this.results.emit(results);
    //     },
    //     (err: any) => { // on error
    //       console.log(err);
    //       this.loading.emit(false);
    //     },
    //     () => { // on completion
    //       this.loading.emit(false);
    //     }
    // );
  }

}
