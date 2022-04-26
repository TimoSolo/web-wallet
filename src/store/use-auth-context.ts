import { useContext, createContext } from "react"

export type AuthIdentity = {
  id: string
  uid: string
  phoneNumber?: string
  emailAddress?: string
  firstName?: string
  lastName?: string
  accountStatus?: string
}

export type AuthSession = {
  galoyJwtToken: string
  identity: AuthIdentity
} | null

type AuthContextType = {
  isAuthenticated: boolean
  galoyJwtToken?: string
  authIdentity?: AuthIdentity
  setAuthSession: (session: AuthSession) => void
  syncSession: () => Promise<true | Error>
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuthSession: () => {},
  syncSession: () => Promise.resolve(true),
})

export const useAuthContext: () => AuthContextType = () => {
  return useContext<AuthContextType>(AuthContext)
}
