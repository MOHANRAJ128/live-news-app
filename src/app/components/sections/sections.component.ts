import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sections } from '../../store/reducers/sections.reducer';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionList: any;

  constructor(private store:Store<any>) {

    this.store.select('sections').subscribe(
      data=>{
        this.sectionList=data;
      }
    )
  }

  ngOnInit() {}

}
