import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row m-4';
  @Output() articleNew: EventEmitter<Article>;
  article: Article;
  articles: Article[] = [];

  constructor() {
    this.articleNew = new EventEmitter();

  }

  ngOnInit(): void {
  }

  onSubmit(title: HTMLInputElement, link:HTMLInputElement): boolean {
    this.article = new Article(title.value, link.value);
    console.log(title.value, link.value);
    this.articleNew.emit(this.article);
    console.log('emite');
    // this.__articleService.newArticle(this.article);
    return false;
  }

}
