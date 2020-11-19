import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../model/article.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row  m-5';
  @Input() article: Article;
  @Output() emitVote: EventEmitter<{caso: string, vote:number}>;


  constructor(private _articleService: ArticleService) {
    this.emitVote = new EventEmitter();
  }

  ngOnInit(): void {
  }

  voteUp(voto: number){
    console.log('uppppp');
    this.emitVote.emit({caso:"add", vote:voto});

  }

  voteDown(voto: number){
    console.log('down');
    this.emitVote.emit({caso:"down", vote:voto});
  }

}
