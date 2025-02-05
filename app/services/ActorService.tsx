import { AxiosInstance } from "api/axiosInstance";
import { getActorUrl } from "config/api.config";
import { IActor } from "shared/types/movie.types";

export const ActorService = {
    async getAll(){
        return AxiosInstance.get<IActor[]>(getActorUrl(''))
    } 
}