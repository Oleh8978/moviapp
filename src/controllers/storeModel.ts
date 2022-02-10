import { IErrorsState } from './errorHandler/model';
import { RouterState } from 'connected-react-router';
import { ILoaderState } from "./loaderReducer/models";
import { IHistoryState } from './historyReducer/models';
import { IAge } from './ageReducer/models';
import { IMoviesResponse } from './getMoviesReducer/models';
import { ISingleMovieState } from './getSingleMovieReducer/models';
import { ISelectedItem } from './menuIemReducer/models';

export interface IStore {
    router: RouterState;
    errors: IErrorsState;
    loader: ILoaderState;
    historyState: IHistoryState;
    age: IAge;
    allMovies: IMoviesResponse;
    singleMovie: ISingleMovieState;
    activeMenuItem: ISelectedItem;
}

export interface IErrorResponse {
    status_code: number,
    status_message: string,
    success: boolean
}
