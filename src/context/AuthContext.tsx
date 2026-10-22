import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

type AuthContextType = {
  isSignedIn: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false)

  function signIn() {
    setIsSignedIn(true)
  }

  function signOut() {
    setIsSignedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
