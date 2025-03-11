import { useAuth } from "hooks/useAuht"
import { useRouter } from "next/router"
import { useEffect } from "react"

export const useAuthRedirect = () => {
    const {query,push} = useRouter()
    const { user } = useAuth()

    const redirect = query.redirect ? String(query.redirect) : '/'


    useEffect(() => {
		if (user) push(redirect)
	}, [user, redirect, push])
}