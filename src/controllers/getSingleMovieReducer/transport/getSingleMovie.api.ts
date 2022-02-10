import { Config } from '../../../config/api';
import { handleErrors } from '../../../utils/index';
import { urlCertificationFormer } from '../../../utils/certificationValidator';

// models
import { ISingleMovieResponse } from '../models';
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
}
export const GeMovieAPI = new API();