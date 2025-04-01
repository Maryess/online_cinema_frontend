export const SERVER_URL = 'http://localhost:4200/api'

export const getAuthUrl = (slug:string) => `/auth${slug}`
export const getUserUrl = (slug:string) => `/user${slug}`
export const getMovieUrl = (slug:string) => `/movie${slug}`
export const getActorUrl = (slug:string) => `/actor${slug}`
export const getGenreUrl = (slug:string) => `/genre${slug}`
export const getRatingUrl = (slug:string) => `/rating${slug}`
export const getAdminUrl = (url:string) => `/manage${url}`
export const getFileUrl = (url:string) => `/uploads${url}`