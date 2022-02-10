import { Config } from '../../../config/api';
import { handleErrors } from '../../../utils/index';
import { urlCertificationFormer } from '../../../utils/certificationValidator';

// models
import { IMoviesResponse } from '../models';
import { IErrorResponse } from '../../storeModel';

class API {
  public async getMoviesList(
    age = 18,
  ): Promise<IMoviesResponse | IErrorResponse> {

    let url = new URL(
      Config.MAIN_ENDPOINT + 'discover/movie?api_key=' + Config.KEY + `&language=en-US&certification_country=US&certification=${urlCertificationFormer(age)}&include_adult=false&page=1&primary_release_date.lte=${new Date(new Date().getTime() - 60*60*24*365)}`,
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
export const GeMoviesAPI = new API();