import { useAuth } from "hooks/useAuht"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const useAuthRedirect = () => {
    const {query,push} = useRouter()
    const { user } = useAuth()
    const [state,setState] = useState<'active'|'block'>('active')

    const redirect = query.redirect ? String(query.redirect) : '/'


    useEffect(() => {
		if (user){ 
      setState('block')
      push(redirect)}
	  }, [user, redirect, push])

}