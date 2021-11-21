import { News } from './../../model/news';
import { NewsState } from './../../store/reducers/news.reducer';
import { NewsActions } from '../../store/actions/news.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subsections: string[]=[];
  response: Object[];
  constructor(
    private store: Store<NewsState>,
    private newsActions: NewsActions
  ) { 
    
  }

  ngOnInit() {
    this.store.select('news').subscribe(
      (data:NewsState)=>{
        this.subsections=[];
        data.newsList.forEach((news:News)=>{
          if(news.subsection){
            this.subsections.push(news.subsection);
          }
          this.subsections=this.subsections.filter((item,i,ar)=>ar.indexOf(item) === i);
        })
      }
    )
  }

  dispatchAction($event: string) {
    console.log($event);
    this.store.dispatch(this.newsActions.FilterSubsection($event));
  }

}
