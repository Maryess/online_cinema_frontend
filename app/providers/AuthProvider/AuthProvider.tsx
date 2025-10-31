import { useActions } from 'hooks/useAction'
import { useRouter } from 'next/router'
import { FC, useEffect, useCallback } from 'react'
import { TypeComponentAuthFields } from 'shared/types/auth.types'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useAuth } from 'hooks/useAuht'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
  ssr: false
})

const AuthProvider: FC<TypeComponentAuthFields> = ({ 
  children, 
  Component: { isOnlyAdmin, isOnlyUser }
}) => {
  const { user } = useAuth()
  const { logout, checkAuth } = useActions()
  const { pathname } = useRouter()

  const stableCheckAuth = useCallback(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) checkAuth()
  }, [checkAuth])

  const stableLogout = useCallback(() => {
    logout()
  }, [logout])

  useEffect(() => {
    stableCheckAuth()
  }, [stableCheckAuth])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) {
      stableLogout()
    }
  }, [pathname, user, stableLogout])

  return !isOnlyUser && !isOnlyAdmin 
    ? <>{children}</> 
    : <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
}

export default AuthProvider;

