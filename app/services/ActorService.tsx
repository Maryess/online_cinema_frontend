import { axiosDefault } from "api/interceprots";
import { getActorUrl } from "config/api.config";
import { IActor } from "shared/types/movie.types";

export const ActorService = {
    async getAll(){
        return axiosDefault.get<IActor[]>(getActorUrl(''))
    } ,
    async deleteActorById(actorId:string){
        return axiosDefault.delete<string>(getActorUrl(`/${actorId}`))
    }
}