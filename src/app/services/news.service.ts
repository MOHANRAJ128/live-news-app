import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, NewsResponse } from '../model/news';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

  sectionNews:NewsResponse;

  constructor(private http:Http) { }

  getSectionNews(sectionName: string) : Observable<NewsResponse>{
    // fetch news of that sectionName
    let url = 'https://api.nytimes.com/svc/topstories/v2/' + sectionName + '.json?api-key=315a5a51483b469a918246dc2753b339';

    // this.http.get(url).map(res=>res.json()).subscribe(result=>{
    //   console.log(result);
    // });
    return this.http.get(url).map(res=>res.json());
  }
}
