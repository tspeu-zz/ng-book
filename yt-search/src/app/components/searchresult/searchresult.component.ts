import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/searchresult';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  @Input() result: SearchResult;
  constructor() { }


  ngOnInit(): void {
  }

}
