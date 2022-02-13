export interface ISingleMovieResponse {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: IBelongsToCollection,
    budget: number,
    genres: IGenre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompany[],
    production_countries: IProductionCountry[],
    release_date: Date,
    revenue: number,
    runtime: number,
    spoken_languages: ISpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number
    vote_count: number
}

export interface IBelongsToCollection {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string
}

export interface IGenre {
    id: number,
    name: string
}

export interface IProductionCompany {
    id: number,
    logo_path: number,
    name: string,
    origin_country: string
}

export interface IProductionCountry {
    iso_3166_1: string,
    name: string
}

export interface ISpokenLanguage {
    english_name: string,
    iso_639_1: string,
    name: string
}

export interface ISingleMovieState {
    data: null | ISingleMovieResponse
    credits: null | ICredit
    releaseDates: null | IReleasesDates
}

export interface ICredit {
    id: number,
    cast: ICast[]
    crew: ICrew[]
}

export interface ICast {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export interface IReleasesDates {
    id: number,
    results: IRelease[]
}

export interface IRelease {
    iso_3166_1: string,
    release_dates: IReleaseDate[]
}

export interface IReleaseDate {
    certification: string,
    iso_639_1: string,
    release_date: Date,
    type: number
}

export interface ICrew {
    adult: boolean,
    gender: number
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null,
    credit_id: string,
    department: string,
    job: string
}
    