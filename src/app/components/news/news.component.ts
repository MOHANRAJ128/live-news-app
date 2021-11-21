import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import '../../../../node_modules/zone.js/dist/zone.js';

import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from '../../services/news.service';
import { News, NewsResponse } from '../../model/news';
import { NewsActions } from '../../store/actions/news.actions';
import { getNews } from '../../store/reducers/selector';
import { getNewsList, news, NewsState} from '../../store/reducers/news.reducer';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: []
})
export class NewsComponent implements OnInit {
  sectionNewsList: News[]=[];
  constructor(
    private route:ActivatedRoute,
    private news:NewsService,
    private store:Store<NewsState>,
    private newsActions:NewsActions,
    ) { }

  ngOnInit() {
    let sectionName;
      // send this sectionName to newsService. Subscribe newsService and get the newsList
      this.route.params.subscribe(params => {
        sectionName = params['id'];
        console.log(sectionName);
        // this.sectionNewsList=this.news.getSectionNews(sectionName);
        // this.news.getSectionNews(sectionName).map(res=>res);
        this.news.getSectionNews(sectionName).map(res=>res).subscribe(data=>{
          this.store.dispatch(this.newsActions.LoadSectionNews(data.results));
        });
     });
      // now, get news from store
      this.store.select('news').subscribe(
        (data:NewsState)=>
        {
          if(data.filter)
          {
            this.sectionNewsList=data.newsList.filter((obj)=>obj.subsection===data.filter);
          }
          else{
            this.sectionNewsList=data.newsList;
          }
          console.log(this.sectionNewsList);
          console.log("Filter value :"+data.filter);
        }
      )
  }
}
