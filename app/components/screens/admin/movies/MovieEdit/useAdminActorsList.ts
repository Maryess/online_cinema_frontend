import { IOptions } from "components/ui/select/select.interface";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { toastr } from "react-redux-toastr";
import { ActorService } from "services/ActorService";

export const useAdminActorsList = () => {
      const queryData = useQuery('list of actors', ()=> 
         ActorService.getAll(),
            {
                select: ( {data}) =>
                    data.map(
                        (genre): IOptions => ({
                           value: genre.id,
                           label:genre.name
                        })
                    ),
                onError(error) {
                    toastr.error(`${error}`, 'List of genre');
                },
            }
        ) 
    
        return useMemo(()=>({
            ...queryData
        }),[queryData])
}