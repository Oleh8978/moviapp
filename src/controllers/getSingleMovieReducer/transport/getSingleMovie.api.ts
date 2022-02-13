import { Config } from '../../../config/api';
import { handleErrors } from '../../../utils/index';

// models
import { ICredit, ISingleMovieResponse } from '../models';
import { IErrorResponse } from '../../storeModel';

class API {
  public async getMovie(
    id = 0,
  ): Promise<ISingleMovieResponse | IErrorResponse> {

    let url = new URL(
      Config.MAIN_ENDPOINT + `movie/${id}?api_key=` + Config.KEY + `&language=en-US`,
    );

    return handleErrors(
      fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
  }

  public async getCredits(
    id = 0,
  ): Promise<ICredit | IErrorResponse> {

    let url = new URL(
      Config.MAIN_ENDPOINT + `movie/${id}/credits?api_key=` + Config.KEY + `&language=en-US`,
    );

    return handleErrors(
      fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
  }

  public async getReleasesDates(
    id = 0,
  ): Promise<ICredit | IErrorResponse> {

    let url = new URL(
      Config.MAIN_ENDPOINT + `movie/${id}/release_dates?api_key=` + Config.KEY,
    );

    return handleErrors(
      fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );
  }
}
export const GetMovieAPI = new API();