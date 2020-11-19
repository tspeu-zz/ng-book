import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './model/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-redit';

  newArticles: Article[] =  [];

  constructor(private _articleService: ArticleService){
    // this.newArticles.push(this.esteArticle);
  }
  ngOnInit(): void {
    this.newArticles = this._articleService.getArticles();
    console.log(this.newArticles );
  }

  onArticleAdd(article: Article): void {
    console.log('emititr este :', article);
    this._articleService.newArticle(article);
  }

  onVoteChange(data: any){
    console.log('data', data);
    if(data.caso === 'add'){
      // this._articleService.addArticle();
    }
    else {
      // this._articleService.takeArticle();

    }
  }

}
