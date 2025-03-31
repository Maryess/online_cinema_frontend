import { axiosDefault } from "api/interceprots";
import { IActorEditInput } from "components/screens/admin/actors/ActorEdit/actor-edit.interface";
import { getActorUrl } from "config/api.config";
import { IActor } from "shared/types/movie.types";

export const ActorService = {
    async getAll(searchTerm?:string){
        return axiosDefault.get<IActor[]>(getActorUrl(''),
       { params: searchTerm
        ? {
                searchTerm,
          }
        : {},})
    } ,
    async getById(actorId:string){
        return axiosDefault.get<IActor>(getActorUrl(`/${actorId}`))
    },
    async update(actorId:string,data:IActorEditInput ){
        return axiosDefault.put<IActor>(getActorUrl(`/${actorId}`), data)
    },
    async deleteActorById(actorId:string){
        return axiosDefault.delete<string>(getActorUrl(`/${actorId}`))
    }
}