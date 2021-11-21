import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { News } from '../../model/news';

@Injectable()
export class NewsActions {
    static LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
    static FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';

    LoadSectionNews(list: News[]): Action {
        return {
            type: NewsActions.LOAD_SECTION_NEWS,
            payload: list
        };
    }
    FilterSubsection(subsection: string): Action {
        return {
            type: NewsActions.FILTER_SUBSECTION,
            payload: subsection
        };
    }
}
