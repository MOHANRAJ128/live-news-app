import { NewsActions } from './../actions/news.actions';
import { Action, Store } from '@ngrx/store';
import { News } from '../../model/news';
import { getNews } from './selector';
import { createSelector } from 'reselect';

// define actions
export const LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
export const FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';

// define state interface
export interface NewsState {
    newsList: News[];
    filter: string;
}

// initial state
export const initialState: NewsState = {
    newsList: [],
    filter: ''
};

// implement actions
export function news (state = initialState, action: Action) {
    switch (action.type) {
        case LOAD_SECTION_NEWS: {
            return {
                newsList: action.payload,
                filter: ''
            };
        }
        case FILTER_SUBSECTION: {
            return {
                newsList: state.newsList,
                filter: action.payload
            };
        }
        default:
            return state;
    }
}

export const getNewsList = (state:News[]) => state;

export const getFilter = (state: {newsList:{
    someData:String,
  }[];
  filter:String
  }) => state.filter;
