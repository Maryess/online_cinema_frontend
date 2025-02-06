import { useQuery } from "react-query"
import { ActorService } from "services/ActorService"

export const useActorApi = () => {
    const queryData = useQuery('best actors', ()=>
                 ActorService.getAll(),{
                     select: ({data}) => data
            })
    
        return queryData
}