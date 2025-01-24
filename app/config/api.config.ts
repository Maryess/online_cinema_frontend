export const SERVER_URL = 'http://localhost:4200/api'

export const getAuthUrl = (string:string) => `/auth${string}`
export const getUserUrl = (string:string) => `/user${string}`
export const getMovieUrl = (string:string) => `/movie${string}`
export const getActorUrl = (string:string) => `/actor${string}`
export const getGenreUrl = (string:string) => `/genre${string}`
export const getRatingUrl = (string:string) => `/rating${string}`