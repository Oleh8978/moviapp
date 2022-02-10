import { IErrorsState } from './errorHandler/model';
import { RouterState } from 'connected-react-router';
import { ILoaderState } from "./loaderReducer/models";
import { IHistoryState } from './historyReducer/models';

export interface IStore {
    router: RouterState;
    errors: IErrorsState;
    loader: ILoaderState;
    historyState: IHistoryState;
}
