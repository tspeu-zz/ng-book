import { Injectable } from '@angular/core';
import { Article } from './model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = [
    new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1)
  ];
  article: Article;

  constructor() {

  }

  addArticle(article: Article ){
    console.log('addArticle');
    console.log('+', article);

    // return article.votes ++;
  }

  takeArticle(article: Article){
    console.log('takeArticle', article.votes );
    // return  article.votes --;
  }

  newArticle(art: Article){
    if(art !== null){
      this.articles.push(art);
    }
  }

  getArticles(){
    return this.articles;
  }

}
